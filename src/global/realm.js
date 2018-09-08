import Realm from 'realm';
import { CourseModel, HomeworkModel, RemarkModel } from './model';

let version = Realm.schemaVersion(Realm.defaultPath);
if (!version) {
  version = 0;
}
const realm = new Realm({
  schema: [CourseModel.schema, HomeworkModel.schema, RemarkModel.schema],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: version
});
export default realm;
