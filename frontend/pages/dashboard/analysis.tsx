// npm packages
import nookies from "nookies"
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

// hepler hooker and function and globar store
import { getUser } from '../../src/utils/auth/helper';
import clearUserCookies from '../../src/utils/clearCookies';
import useAuthUser from "../../src/hooks/useAuthUser"


// components
import AnalysisMainLayout from "../../src/components/AnalysisMainLayout";
import DashBoardBase from "../../src/components/DashBoardBase";


const Analaysis = (props)=>{
  const user = useAuthUser(props.cookies.userToken)
  
    return (
      <DashBoardBase>
          <AnalysisMainLayout />
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

export default Analaysis