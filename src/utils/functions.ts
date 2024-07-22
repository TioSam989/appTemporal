import { useDispatch } from "react-redux"
import { getData } from "./asyncStorageMethods"

export const CheckHasPassedByCarouselStart = async () => {
    const data = await getData('carousel')

    return data ? true : false

} 