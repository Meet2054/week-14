

export default function Layout({
  children,
}: {children : React.ReactNode}){

  return (
        <div>
        <div className="border-b p-1 text-center">
            20% of on all products
        </div>
        {children}
        </div>
    );
}
