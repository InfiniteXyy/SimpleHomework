class CourseModel {
  constructor(title) {
    this.title = title;
  }
}

CourseModel.schema = {
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

class HomeworkModel {}

HomeworkModel.schema = {
  name: 'Homework',
  properties: {
    created: { type: 'date', default: new Date() },
    deadline: { type: 'date', optional: true },
    finished: { type: 'bool', default: false },
    archived: { type: 'bool', default: false },
    content: 'string',
    course: 'Course',
    remarks: 'Remark[]'
  }
};

class RemarkModel {}

RemarkModel.schema = {
  name: 'Remark',
  properties: {
    created: { type: 'date', default: new Date() },
    content: 'string'
  }
};

export { CourseModel, HomeworkModel, RemarkModel };
