export default function Error({children}: {children: React.ReactNode}) {

  return (
    <p className="text-red-600 my-2 mx-1 text-sm">{children}</p>
  )
}
