import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  X,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { initialTasks, teamWorkload, recentActivities } from '../../data/adminData'

export default function AdminTasksPage() {
  const [tasks, setTasks] = useState(initialTasks)
  const [searchQuery, setSearchQuery] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('All Priorities')
  const [assigneeFilter, setAssigneeFilter] = useState('All Assignees')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [targetColumn, setTargetColumn] = useState('todo')
  const [newTask, setNewTask] = useState({
    title: '',
    category: 'Website',
    priority: 'Medium',
    date: '25 Sep 2026',
    assignee: 'AS',
    assigneeName: 'Amit Sharma',
  })

  // Columns definition
  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-slate-500' },
    { id: 'in_progress', title: 'In Progress', color: 'bg-amber-500' },
    { id: 'review', title: 'Review', color: 'bg-blue-500' },
    { id: 'done', title: 'Done', color: 'bg-emerald-500' },
  ]

  // Move task to next or specific column
  const handleMoveTask = (taskId, newColumn) => {
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, column: newColumn } : t)))
  }

  // Create task
  const handleCreateTask = (e) => {
    e.preventDefault()
    if (!newTask.title) return
    const created = {
      id: `t-${Date.now()}`,
      title: newTask.title,
      column: targetColumn,
      category: newTask.category,
      priority: newTask.priority,
      date: newTask.date,
      assignee: newTask.assignee,
      assigneeName: newTask.assignee === 'PP' ? 'Priya Pathak' : 'Amit Sharma',
    }
    setTasks([...tasks, created])
    setShowCreateModal(false)
    setNewTask({
      title: '',
      category: 'Website',
      priority: 'Medium',
      date: '25 Sep 2026',
      assignee: 'AS',
      assigneeName: 'Amit Sharma',
    })
  }

  // Filter tasks
  const filteredTasks = tasks.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPriority =
      priorityFilter === 'All Priorities' || t.priority === priorityFilter
    const matchesAssignee =
      assigneeFilter === 'All Assignees' || t.assignee === assigneeFilter
    return matchesSearch && matchesPriority && matchesAssignee
  })

  // Priority badge styling
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-50 text-rose-600 border border-rose-100'
      case 'Medium':
        return 'bg-amber-50 text-amber-600 border border-amber-100'
      case 'Low':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100'
      default:
        return 'bg-slate-50 text-slate-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
            <Link to="/admin" className="hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
            <span>&gt;</span>
            <span className="text-slate-700">Tasks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Tasks & Notes</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Plan, assign and track your team's work. Get things done, together.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs">
            My Tasks
          </button>
          <button className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button
            onClick={() => {
              setTargetColumn('todo')
              setShowCreateModal(true)
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </div>

      {/* 4 Stat KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">{tasks.length}</div>
            <div className="text-xs font-medium text-slate-400">Total Tasks</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {tasks.filter((t) => t.column === 'done').length}
            </div>
            <div className="text-xs font-medium text-slate-400">Completed</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {tasks.filter((t) => t.column === 'in_progress').length}
            </div>
            <div className="text-xs font-medium text-slate-400">In Progress</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">2</div>
            <div className="text-xs font-medium text-slate-400">Overdue</div>
          </div>
        </div>
      </div>

      {/* Main Kanban & Right Sidebar Split */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Left 3 Cols: Board */}
        <div className="lg:col-span-3 space-y-4">
          {/* Controls row */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold">
                Board
              </button>
              <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-medium">
                List
              </button>
              <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-medium">
                Calendar
              </button>
              <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg text-xs font-medium">
                My Tasks
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-semibold text-slate-700"
              >
                <option value="All Priorities">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tasks..."
                  className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
            {columns.map((col) => {
              const colTasks = filteredTasks.filter((t) => t.column === col.id)
              return (
                <div
                  key={col.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-3.5 flex flex-col min-h-[500px]"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <h3 className="font-bold text-xs text-slate-900">{col.title}</h3>
                      <span className="text-[11px] font-semibold text-slate-400">({colTasks.length})</span>
                    </div>
                    <button
                      onClick={() => {
                        setTargetColumn(col.id)
                        setShowCreateModal(true)
                      }}
                      className="text-slate-400 hover:text-indigo-600 p-1 rounded hover:bg-slate-100 transition-colors"
                      title="Add task in column"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Column Task Cards */}
                  <div className="space-y-3 flex-1">
                    {colTasks.map((t) => (
                      <div
                        key={t.id}
                        className="bg-white rounded-xl border border-slate-100 p-3.5 shadow-2xs hover:shadow-md hover:border-indigo-100 transition-all group"
                      >
                        <div className="text-xs font-bold text-slate-900 leading-snug mb-2.5">
                          {t.title}
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                            {t.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getPriorityClass(t.priority)}`}>
                            {t.priority}
                          </span>
                        </div>

                        {/* Footer: Date & Assignee */}
                        <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-[11px]">
                          <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                            <Calendar className="w-3 h-3" />
                            {t.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            {/* Column mover quick dropdown */}
                            <select
                              value={t.column}
                              onChange={(e) => handleMoveTask(t.id, e.target.value)}
                              className="text-[9px] font-semibold bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600 cursor-pointer"
                              title="Move status"
                            >
                              <option value="todo">To Do</option>
                              <option value="in_progress">In Prog</option>
                              <option value="review">Review</option>
                              <option value="done">Done</option>
                            </select>
                            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center">
                              {t.assignee}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {colTasks.length === 0 && (
                      <div className="text-center py-10 text-slate-300 text-xs font-medium">
                        No tasks here
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right 1 Col: Sidebar Info Cards */}
        <div className="space-y-6">
          {/* Card 1: Task Overview */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Task Overview
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">This Month</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> Total Tasks
                </span>
                <span className="font-bold text-slate-900">{tasks.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Completed
                </span>
                <span className="font-bold text-slate-900">
                  {tasks.filter((t) => t.column === 'done').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> In Progress
                </span>
                <span className="font-bold text-slate-900">
                  {tasks.filter((t) => t.column === 'in_progress').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-rose-500" /> Overdue
                </span>
                <span className="font-bold text-rose-600">2</span>
              </div>
            </div>
          </div>

          {/* Card 2: Team Workload */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Team Workload
            </h3>
            <div className="space-y-3.5 text-xs">
              {teamWorkload.map((member) => (
                <div key={member.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        {member.initials}
                      </span>
                      <span className="font-medium text-slate-700">{member.name}</span>
                    </div>
                    <span className="font-bold text-slate-900">{member.tasksCount}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${member.color}`}
                      style={{ width: `${(member.tasksCount / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Recent Activity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Recent Activity
              </h3>
              <span className="text-[11px] text-indigo-600 font-bold cursor-pointer">View All</span>
            </div>
            <div className="space-y-3 text-xs">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex items-start gap-2.5">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${act.dotColor}`} />
                  <div>
                    <span className="font-bold text-slate-800">{act.user}</span>{' '}
                    <span className="text-slate-500">{act.action}</span>
                    <div className="text-[10px] text-slate-400 mt-0.5">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Task Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150 relative">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Create New Task</h3>
            <form onSubmit={handleCreateTask} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Task Title *</label>
                <input
                  type="text"
                  required
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="e.g. Implement contact form auto-reply"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Column</label>
                  <select
                    value={targetColumn}
                    onChange={(e) => setTargetColumn(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Category</label>
                  <select
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Website">Website</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Internal">Internal</option>
                    <option value="Project">Project</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Assignee</label>
                  <select
                    value={newTask.assignee}
                    onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="AS">Amit Sharma (AS)</option>
                    <option value="PP">Priya Pathak (PP)</option>
                    <option value="RK">Rahul Kumar (RK)</option>
                    <option value="DK">Deepak Kumar (DK)</option>
                    <option value="NS">Neha Singh (NS)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Due Date</label>
                <input
                  type="text"
                  value={newTask.date}
                  onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="25 Sep 2026"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
