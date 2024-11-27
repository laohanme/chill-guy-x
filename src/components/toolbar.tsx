"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export function Toolbar() {
  return (
    <div className="fixed bottom-10 w-full">
      <div className="mx-auto flex items-center justify-center gap-4">
        <div className="flex flex-col items-center space-y-5 pb-4 pt-10">
          <div className="max-w-[100vw] px-5">
            <div className="no-scrollbar w-full overflow-x-auto rounded-full border bg-white sm:overflow-visible">
              <div className="flex items-center space-x-2 p-2 text-2xl md:justify-center">
                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      color="currentColor"
                    >
                      <path d="M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z" />
                      <path d="M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908m9-1.5h-5m2.5-2.5v5" />
                    </g>
                  </svg>
                </Button>
                <div className="h-5">
                  <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
                </div>

                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <img
                    src="https://i.ibb.co/XzgSxdY/6032aebb-0624-460c-a8cb-aa2df3e7de28.png"
                    className="size-6"
                  />
                </Button>

                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="currentColor"
                      d="M43.803 39.423A1.25 1.25 0 0 1 42.75 40h-15.5c-.69 0-1.25-.56-1.25-1.25V5.25a1.25 1.25 0 0 1 2.384-.525l15.5 33.5a1.25 1.25 0 0 1-.08 1.198M28.5 10.928V37.5h12.294zM5 40a1 1 0 0 1-.905-1.425l16-34A1 1 0 0 1 22 5v34a1 1 0 0 1-1 1z"
                    />
                  </svg>
                </Button>

                <div className="h-5">
                  <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
                </div>

                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m18.5 4l1.16 4.35l-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25c.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25c.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43c-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4z"
                    />
                  </svg>
                </Button>

                <div className="h-5">
                  <div className="mx-1.5 h-full w-px bg-[#e5e5e5]"></div>
                </div>

                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    >
                      <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" />
                      <path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" />
                      <path
                        strokeLinejoin="round"
                        d="M17 11V2m0 9l3-3m-3 3l-3-3"
                      />
                    </g>
                  </svg>
                </Button>

                <Button
                  variant="outline"
                  size={"icon"}
                  className="rounded-full"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                      <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
