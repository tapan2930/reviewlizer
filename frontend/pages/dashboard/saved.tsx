import React from 'react'
import DashBoardBase from '../../src/components/DashBoardBase'
import SavedPageMainLayout from '../../src/components/SavedPageMainLayout'
import nookies from "nookies"


// hepler hooks and function and globar store
import useAuthUser from "../../src/hooks/useAuthUser"

const SavedPage :React.FC = (props:any):React.ReactElement => {
    const user = useAuthUser(props.cookies.userToken)
    return (
        <DashBoardBase>
          {
            user ? <SavedPageMainLayout /> : null
          }
        </DashBoardBase>
    )
}


export const getServerSideProps = async (context) => {
    const cookies = nookies.get(context)
    if (cookies.userToken) {
        return { props: { cookies } };
      }
      return {
        redirect: {
          destination: '/account/signin',
          permanent: false,
        },
      };
  };

export default SavedPage