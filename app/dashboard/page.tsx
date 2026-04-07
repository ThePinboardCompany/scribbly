'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Home,
  FileText,
  BarChart3,
  Folder,
  Users,
  Camera,
  FileDescription,
  Brain,
  Database,
  ClipboardList,
  Settings,
  HelpCircle,
  Search as SearchIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Check,
  Eye,
  Columns3,
  Loader,
} from 'lucide-react'

const tableData = [
  { id: 1, header: "Cover page", type: "Cover page", status: "In Process", target: "18", limit: "5", reviewer: "Eddie Lake" },
  { id: 2, header: "Table of contents", type: "Table of contents", status: "Done", target: "29", limit: "24", reviewer: "Eddie Lake" },
  { id: 3, header: "Executive summary", type: "Narrative", status: "Done", target: "10", limit: "13", reviewer: "Eddie Lake" },
  { id: 4, header: "Technical approach", type: "Narrative", status: "Done", target: "27", limit: "23", reviewer: "Jamik Tashpulatov" },
  { id: 5, header: "Design", type: "Narrative", status: "In Process", target: "2", limit: "16", reviewer: "Jamik Tashpulatov" },
]

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedView, setSelectedView] = useState('All')

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} border-r border-gray-200 transition-all duration-300 flex flex-col bg-white`}>
        {/* Logo */}
        <div className="h-16 border-b border-gray-200 flex items-center px-4 gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          {sidebarOpen && <span className="font-bold text-gray-900">Acme Inc.</span>}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {[
            { icon: Home, label: 'Dashboard' },
            { icon: FileText, label: 'Lifecycle' },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Folder, label: 'Projects' },
            { icon: Users, label: 'Team' },
          ].map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}

          {sidebarOpen && <div className="pt-4 border-t border-gray-200 mt-4" />}

          {/* Cloud Items */}
          {sidebarOpen && (
            <div className="space-y-2 pt-2">
              {[
                { icon: Camera, label: 'Capture' },
                { icon: FileDescription, label: 'Proposal' },
                { icon: Brain, label: 'Prompts' },
              ].map((item) => (
                <details key={item.label} className="group">
                  <summary className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm flex-1">{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-9 space-y-1 mt-1">
                    <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-1">
                      Active Proposals
                    </Link>
                    <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-1">
                      Archived
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          )}

          {sidebarOpen && <div className="pt-4 border-t border-gray-200 mt-4" />}

          {/* Documents */}
          {sidebarOpen && (
            <div className="space-y-2 pt-2">
              {[
                { icon: Database, label: 'Data Library' },
                { icon: ClipboardList, label: 'Reports' },
                { icon: FileText, label: 'Word Assistant' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Footer Navigation */}
        <div className="border-t border-gray-200 p-4 space-y-2">
          {[
            { icon: Settings, label: 'Settings' },
            { icon: HelpCircle, label: 'Get Help' },
            { icon: SearchIcon, label: 'Search' },
          ].map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}
        </div>

        {/* User Info */}
        {sidebarOpen && (
          <div className="border-t border-gray-200 p-4">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-900">shadcn</p>
                <p className="text-xs text-gray-500">m@example.com</p>
              </div>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Documents</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Quick Create
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Revenue', value: '$1,250.00', change: '+12.5%', positive: true, desc: 'Trending up this month' },
                { label: 'New Customers', value: '1,234', change: '-20%', positive: false, desc: 'Down 20% this period' },
                { label: 'Active Accounts', value: '45,678', change: '+12.5%', positive: true, desc: 'Strong user retention' },
                { label: 'Growth Rate', value: '4.5%', change: '+4.5%', positive: true, desc: 'Steady performance increase' },
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{card.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {card.positive ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm font-medium ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {card.change}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Info
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Total Visitors</h3>
                  <p className="text-sm text-gray-500 mt-1">Total for the last 3 months</p>
                </div>
                <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Last 3 months</option>
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                </select>
              </div>
              <div className="h-64 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-100 flex items-end gap-1 px-4 py-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                    style={{ height: `${30 + Math.random() * 70}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-gray-200 rounded-lg">
              {/* Table Toolbar */}
              <div className="border-b border-gray-200 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white hover:border-gray-300">
                      <option>All Views</option>
                      <option>Outline</option>
                      <option>Past Performance</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                      <Columns3 className="w-4 h-4" />
                      Customize Columns
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add Section
                    </button>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 border-b border-gray-200 -mx-6 px-6">
                  {['All', 'Outline', 'Past Performance', 'Key Personnel'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedView(tab)}
                      className={`px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                        selectedView === tab
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-3 text-left">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                      </th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Header</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Section Type</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Status</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Target</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Limit</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-900">Reviewer</th>
                      <th className="px-6 py-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-3">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                        </td>
                        <td className="px-6 py-3 font-medium text-gray-900">{row.header}</td>
                        <td className="px-6 py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {row.type}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            {row.status === 'Done' ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Loader className="w-4 h-4 text-gray-400 animate-spin" />
                            )}
                            <span className="text-gray-700">{row.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-gray-700">{row.target}</td>
                        <td className="px-6 py-3 text-gray-700">{row.limit}</td>
                        <td className="px-6 py-3 text-gray-700">{row.reviewer}</td>
                        <td className="px-6 py-3">
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between text-sm">
                <div className="text-gray-600">
                  {tableData.length} of {tableData.length} row(s) selected.
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled>
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-gray-600 px-2">Page 1 of 1</span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled>
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
