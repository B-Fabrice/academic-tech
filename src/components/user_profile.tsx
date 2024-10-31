export default function UserProfile({ path, active=false, customClass='' }: { path: string, active?: boolean, customClass?: string }) {
  return (
    <div className={`flex items-center w-9 h-9 relative ${customClass}`}>
      <img src={path} alt="profile" className="rounded-full w-full"/>
      { active && <div className="absolute border border-1 border-white dark:border-graphite top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>}
    </div>
  )
}