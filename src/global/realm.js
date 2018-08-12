import Realm from "realm";
import { CourseModel, HomeworkModel, RemarkModel } from './model'

export default new Realm({
  schema: [CourseModel.schema, HomeworkModel.schema, RemarkModel.schema],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: Realm.schemaVersion(Realm.defaultPath)
});
