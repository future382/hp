import '@/app/page.css'

export default function Home() {
  return <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-300">
              Hello, Here's <mark className='highLightMark' data-cursor="block">Biltune</mark>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300" data-cursor="block">
               Developer / Open Sourceror / Blogger / Sever Player
              <br />
              A Student from China
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                  data-cursor="block"
                  href="https://blog.biltune.top"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                  Blog
              </a>
              <a data-cursor="block" href="https://github.com/future382" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300 px-3.5 py-2.5 ">
                  GitHub
              </a>
          </div>
      </div>
  </div>;
}
