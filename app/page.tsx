import Hello from "@/app/components/hello";

const Page = () => {
    console.log("What type of component am Is?")
    return (
        <main>
            <Hello />
            <div className="text-5xl underline">Page</div>
        </main>
    )
}
export default Page
