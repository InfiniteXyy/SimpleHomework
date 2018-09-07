import Realm from "realm";
import { CourseModel, HomeworkModel, RemarkModel } from "./model";

let version = Realm.schemaVersion(Realm.defaultPath);
if (!version) {
  version = 0;
}
export default new Realm({
  schema: [CourseModel.schema, HomeworkModel.schema, RemarkModel.schema],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: version
});
