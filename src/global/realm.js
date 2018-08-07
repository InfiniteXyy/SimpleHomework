import Realm from "realm";
import { CourseModel, HomeworkModel } from "./model";

export default new Realm({
  schema: [CourseModel.schema, HomeworkModel.schema],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: Realm.schemaVersion(Realm.defaultPath)
});
