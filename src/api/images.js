import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import showError from '../toast';
import { storage } from '../utils/firebase';

const loadImage = async (folderRef, img) => {
    try {
        const snapshot = await uploadBytes(folderRef, img);
        const url = await getDownloadURL(ref(storage, snapshot.ref.fullPath));

        return url;
    } catch (error) {
        showError(error);
    }

    return null;
};

export default loadImage;
