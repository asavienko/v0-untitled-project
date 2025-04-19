import type { Metadata } from "next"
import { SlidersHorizontal, CheckSquare, AlertCircle, Info, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Forms | UI Components",
  description: "Input fields, validation, and form layouts for the Runtime Verification platform",
}

export default function FormsPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Forms</h1>
        <p className="text-muted-foreground text-lg">
          Explore input fields, validation patterns, and form layouts for collecting user data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <SlidersHorizontal className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Input Fields</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Various input field types for collecting different kinds of data.
          </p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Text Input</label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Email Input</label>
              <input
                type="email"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Password Input</label>
              <input
                type="password"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Textarea</label>
              <textarea
                className="w-full p-3 rounded-md border bg-background min-h-[80px]"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <CheckSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Selection Controls</h2>
          </div>
          <p className="text-muted-foreground mb-4">Controls for selecting options and toggling states.</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">Checkbox</label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="checkbox1" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="checkbox1" className="text-sm">
                    Option 1
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="checkbox2" className="h-4 w-4 rounded border-gray-300" checked />
                  <label htmlFor="checkbox2" className="text-sm">
                    Option 2
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Radio Buttons</label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="radio" id="radio1" name="radio-group" className="h-4 w-4 border-gray-300" />
                  <label htmlFor="radio1" className="text-sm">
                    Option A
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" id="radio2" name="radio-group" className="h-4 w-4 border-gray-300" checked />
                  <label htmlFor="radio2" className="text-sm">
                    Option B
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Toggle Switch</label>
              <div className="flex items-center gap-2">
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-5"></span>
                </div>
                <span className="text-sm">Enabled</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Select Dropdown</label>
              <select className="w-full h-10 px-3 rounded-md border bg-background">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Validation States</h2>
          </div>
          <p className="text-muted-foreground mb-4">Different states for form validation and feedback.</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Default State</label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Focus State</label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border-2 border-primary bg-background"
                placeholder="This field has focus"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Error State</label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border border-red-500 bg-background"
                placeholder="Invalid input"
              />
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> This field is required
              </p>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Success State</label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border border-green-500 bg-background"
                value="Valid input"
                readOnly
              />
              <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                <Check className="h-3 w-3" /> Input is valid
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Form Helpers</h2>
          </div>
          <p className="text-muted-foreground mb-4">Helper elements to improve form usability and accessibility.</p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">
                Username
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your username"
              />
              <p className="text-xs text-muted-foreground mt-1">Username must be between 3-20 characters</p>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Password Strength</label>
              <input
                type="password"
                className="w-full h-10 px-3 rounded-md border bg-background"
                placeholder="Enter your password"
              />
              <div className="mt-2 flex gap-1">
                <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="h-1 flex-1 rounded-full bg-muted"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Strong password</p>
            </div>

            <div>
              <fieldset className="border rounded-md p-4">
                <legend className="text-sm font-medium px-2">Contact Information</legend>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm block mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full h-10 px-3 rounded-md border bg-background"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="text-sm block mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full h-10 px-3 rounded-md border bg-background"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-md">
            <SlidersHorizontal className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Form Layouts</h2>
        </div>
        <p className="text-muted-foreground mb-6">Common form layouts for different use cases.</p>

        <div className="space-y-8">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold mb-4">Login Form</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-sm font-medium block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="remember" className="text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-primary">
                  Forgot password?
                </a>
              </div>
              <button className="w-full h-10 bg-primary text-primary-foreground rounded-md font-medium">Sign In</button>
            </div>
          </div>

          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold mb-4">Two-Column Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1">Address</label>
                <input
                  type="text"
                  className="w-full h-10 px-3 rounded-md border bg-background"
                  placeholder="Enter address"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button className="px-4 h-10 bg-primary text-primary-foreground rounded-md font-medium">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
