export function InviteForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input type="email" placeholder="colleague@example.com" className="w-full border rounded p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Role</label>
        <select className="w-full border rounded p-2">
          <option>Developer</option>
          <option>Admin</option>
          <option>Auditor</option>
          <option>Viewer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Custom Message (Optional)</label>
        <textarea placeholder="Join our organization..." className="w-full border rounded p-2 h-20"></textarea>
      </div>

      <button type="submit" className="w-full border rounded p-2 bg-gray-100">
        Send Invitation
      </button>
    </form>
  )
}
