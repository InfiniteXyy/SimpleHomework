import Realm from 'realm';

class CourseModel extends Realm.Object {}
CourseModel.schema = {
  id: 'string',
  name: 'Course',
  primaryKey: 'title',
  properties: {
    title: 'string',
    color: { type: 'string', default: '#cccccc' },
    expanding: { type: 'bool', default: true }, // for view
    homeworkList: {
      type: 'linkingObjects',
      objectType: 'Homework',
      property: 'course'
    }
  }
};

class HomeworkModel extends Realm.Object {}

HomeworkModel.schema = {
  name: 'Homework',
  properties: {
    id: 'string',
    created: { type: 'date', default: new Date() },
    deadline: { type: 'date', optional: true },
    finished: { type: 'bool', default: false },
    archived: { type: 'bool', default: false },
    content: 'string',
    course: 'Course',
    remarks: 'Remark[]'
  }
};

class RemarkModel extends Realm.Object {}

RemarkModel.schema = {
  id: 'string',
  name: 'Remark',
  properties: {
    created: { type: 'date', default: new Date() },
    content: 'string'
  }
};

let version = Realm.schemaVersion(Realm.defaultPath);
if (!version) {
  version = 0;
}
const realm = new Realm({
  schema: [CourseModel, HomeworkModel, RemarkModel],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: version
});
export default realm;
