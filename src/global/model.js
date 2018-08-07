class CourseModel {
  constructor(title) {
    this.title = title;
  }
}

CourseModel.schema = {
  name: "Course",
  primaryKey: "title",
  properties: {
    title: "string",
    color: { type: "string", default: "#cccccc" },
    homeworkList: {
      type: "linkingObjects",
      objectType: "Homework",
      property: "course"
    }
  }
};

class HomeworkModel {}

HomeworkModel.schema = {
  name: "Homework",
  properties: {
    created: { type: "date", default: new Date() },
    finished: { type: "bool", default: false },
    content: "string",
    course: "Course"
  }
};

export { CourseModel, HomeworkModel };
