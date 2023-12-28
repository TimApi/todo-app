export interface ITodoItem {
  text: string
  listType: IListType
}

export type IListType = (typeof IActiveList)[keyof typeof IActiveList]

export const IActiveList = {
  allTodos: 'allTodo',
  activelist: 'activeTodoList',
  completedList: 'CompletedTodoList'
} as const
