// npm packages
import  nookies from 'nookies'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';


// hepler hooker and function and globar store
import { getUser } from '../src/utils/auth/helper';
import clearUserCookies from '../src/utils/clearCookies';


// components
import DashboardMainLayout from "../src/components/DashboardMainLayout/index";
import DashBoardBase from '../src/components/DashBoardBase';
import useAuthUser from '../src/hooks/useAuthUser';


const DashBoard = (props)=>{
    const user = useAuthUser(props.cookies.userToken)
    return (
      <DashBoardBase>
          <DashboardMainLayout userInfo = {user} />
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

export default DashBoard

