import SavedTable from "./Table"
import {productDetailsType} from "../../types/userInfo.types"

type propType = {
    savedProducts: Array<productDetailsType>
}

const SavedPageMainLayout :React.FC<propType> = ({savedProducts}):React.ReactElement => {

    return (
        <div>
            <SavedTable savedProducts={savedProducts} />
        </div>
    )
}

export default SavedPageMainLayout