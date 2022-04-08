import {Button, Card, CardContent, CardHeader} from '@mui/material';
import Link from 'next/link';
import Layout from '../layouts/centered';
import {useSession} from 'next-auth/react';
import {useMemo} from 'react';
import CreateFirstInstanceForm from '../containers/CreateFirstInstance';
import TopBar from '../containers/TopBar';
import SupportButton from '../containers/SupportButton';

const Home = () => {
  const session = useSession();
  const status = useMemo(() => session.status, [session]);
  return (
    <Layout publicAccess noRedirect header={<TopBar />}>
      <Card sx={{maxWidth: 560, width: '98%'}}>
        <CardHeader title="Discover voca.city" />
        <CardContent>
          <CreateFirstInstanceForm>
            {status === 'authenticated' ? (
              <Link href="/dashboard" passHref>
                <Button variant="contained">Dashboard</Button>
              </Link>
            ) : (
              <Button type="submit" variant="contained">
                Register
              </Button>
            )}
          </CreateFirstInstanceForm>
        </CardContent>
      </Card>
      <SupportButton/>
    </Layout>
  );
};

export default Home;
