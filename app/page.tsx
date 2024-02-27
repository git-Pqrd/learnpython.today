import { BlogComponent } from '@/components/blog-component'

export default function Home() {
    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hey, Welcome to LearnPython.Today!
            </h1>
            <p className="font-bold text-xl text-muted-foreground mt-4">
                A pragmatic plan on how to learn python. How and Why.
            </p>
            <BlogComponent/>
        </div>
    )
}
