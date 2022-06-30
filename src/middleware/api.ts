import { Middleware } from "redux"
import { RootState } from "../store/store"

const api: Middleware<{}, RootState> = store => next => async action => {

}
