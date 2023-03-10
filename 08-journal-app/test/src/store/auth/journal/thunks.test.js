import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../../../src/firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../../../src/store/journal/journalSlice';
import {startNewNote} from '../../../../../src/store/journal/thunks'

describe('Pruebas en el journal thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks())
    
    test('startNewNote debe crear una nueva nota ', async () => {
        const uid='test-uid'
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            "body": expect.any(String),
            "date": expect.any(Number),
            "id": expect.any(String),
            "imageUrls": expect.any(Array),
            "title":expect.any(String),
        }))
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            "body": expect.any(String),
            "date": expect.any(Number),
            "id": expect.any(String),
            "imageUrls": expect.any(Array),
            "title":expect.any(String),
        }))

        //borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
        
        await Promise.all(deletePromises)
        
  })
})
