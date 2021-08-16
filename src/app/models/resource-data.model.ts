import {Image} from "./image.model";

export interface ResourceData<T> {
  success: boolean,
  message: string,
  slides: Image[]
}
