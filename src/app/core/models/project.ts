import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Task } from './task';

export interface Project {
    id?: string;
    name: string;
    tasks: AngularFirestoreCollection<Task>;
}
