import { useRef, useEffect, RefObject } from 'react'
import { Link } from 'react-router-dom'

interface IprofileOptionProps {
  handleProfileOption: (flag: boolean) => void
}
export default function ProfileOption(props: IprofileOptionProps) {
  const box = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(popupRef, box, props)

  return (
    <div className={` fixed w-full h-full top-0 left-0 right-0 bottom-0 z-[99999]`} ref={popupRef}>
      <div ref={box} className="bg-white p-3 shadow-lg rounded-md absolute z-[9999999] bottom-[65px] left-4">
        <p className="text-default text-[13px] border-b pb-1 border-default border-opacity-30">kiran@meliodus.org</p>
        <div className="text-[15px] flex flex-col mt-4 space-y-1.5">
          <Link className="text-default" to={`/`}>
            Settings
          </Link>
          <Link className="text-[#C3002F]" to={`/`}>
            Signout
          </Link>
        </div>
      </div>
    </div>
  )
}

type Tref1 = RefObject<HTMLDivElement>
type Tref2 = RefObject<HTMLDivElement>

function useOutsideAlerter(ref1: Tref1, ref2: Tref2, props: IprofileOptionProps) {
  useEffect(() => {
    const { current: c1 } = ref1
    const { current: c2 } = ref2
    // Function for click event
    function handleOutsideClick(event: MouseEvent) {
      if (c2 && !c2.contains(event.target as HTMLElement)) {
        props.handleProfileOption(false)
      }
    }
    // Adding click event listener
    c1?.addEventListener('click', handleOutsideClick)
    return () => c1?.removeEventListener('click', handleOutsideClick)
  }, [ref1, ref2, props])
}
