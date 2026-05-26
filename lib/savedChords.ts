import createClient from '@/lib/supabaseBrowserClient';
import type { NotePosition } from '@/lib/fretboardMap';

export type SavedChordContext =
    | {
          source: 'draw';
          tuningName: string;
          capo: number;
      }
    | {
          source: 'library';
          mode: 'chords';
          rootNote: string;
          tuningName: string;
          capo: number;
          category: string;
          voicingType: string;
          stringSet: string;
          chordQuality: string;
          position: string;
          altShape: number;
      }
    | {
          source: 'library';
          mode: 'scales';
          rootNote: string;
          tuningName: string;
          capo: number;
          noteGroup: string;
          scale: string;
          scalePosition: number;
          scalePattern: string;
          scaleVariant: number;
      };

export type SavedChord = {
    id: string;
    label: string;
    notes: NotePosition[];
    context: SavedChordContext;
    created_at: string;
};

function client() {
    return createClient();
}

export async function getCurrentUserId(): Promise<string | null> {
    const supabase = client();
    const {
        data: { session },
    } = await supabase.auth.getSession();
    return session?.user?.id ?? null;
}

export async function fetchSavedChords(): Promise<SavedChord[]> {
    const supabase = client();
    const { data, error } = await supabase
        .from('saved_chords')
        .select('id, label, notes, context, created_at')
        .order('created_at', { ascending: false });
    if (error) throw error;
    return (data ?? []) as SavedChord[];
}

export async function saveChord(chord: {
    label: string;
    notes: NotePosition[];
    context: SavedChordContext;
}): Promise<SavedChord> {
    const supabase = client();
    const uid = await getCurrentUserId();
    if (!uid) throw new Error('Not signed in');
    const { data, error } = await supabase
        .from('saved_chords')
        .insert({ user_id: uid, ...chord })
        .select('id, label, notes, context, created_at')
        .single();
    if (error) throw error;
    return data as SavedChord;
}

export async function renameChord(id: string, label: string): Promise<void> {
    const supabase = client();
    const { error } = await supabase
        .from('saved_chords')
        .update({ label })
        .eq('id', id);
    if (error) throw error;
}

export async function deleteChord(id: string): Promise<void> {
    const supabase = client();
    const { error } = await supabase
        .from('saved_chords')
        .delete()
        .eq('id', id);
    if (error) throw error;
}
