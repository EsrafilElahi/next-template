export const getServerSideProps = async (context) => {
  try {
    // if (typeof window === 'undefined' && context.ctx.res.writeHead) {
    const res = await axios.get(`${process.env.BACKEND_BASE_URL}/api/doctors/department/`);
    // res --> departmentName
    context.res.writeHead(302, { Location: `/doctors/${res.data[0].name}/` });
    context.res.end();
    // }
  } catch (e) {
    console.log(e);
    if (e.response) { return { props: { error: e.response.data } }; }
    return { props: { error: '' } };
  }
};


// in the docters --> [department].js

export const getServerSideProps = async (context) => {
  try {
    const { department } = context.params;
    // for get doctors ssr
    const res = await axios.get(`${process.env.BACKEND_BASE_URL}/api/${department}/doctors/`);

    return {
      props: {
        doctors: res.data,
        department,
      },
    };
  } catch (e) {
    console.log(e);
    return { props: { doctors: [], error: e.response.data } };
  }
};
