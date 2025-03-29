import { DataTable } from '@/components/data-table'
import { columns , User} from './coloum'





const API_URL = "https://dummyjson.com/users";

async function getUsers() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.users.map((user: any) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    lastSeen: generateRandomLastSeen() // Random Last Seen time
  }));
}


const generateRandomLastSeen = () => {
  const now = new Date();
  now.setHours(now.getHours() - Math.floor(Math.random() * 24));
  return now.toISOString();
};


async function page() {
  const data = await getUsers()
  return (
    <section className='py-24'>
        <div className='container'>
            <h1 className='font-bold text-3xl'>All Users Data</h1>
            <DataTable columns={columns} data={data} />
           
            
        </div>
    </section>
  )
}

export default page




// export default function Home() {
//   return (
//     <main className="p-10">
//       <h1 className="text-2xl font-bold mb-6">User List</h1>
//       <DataTable />
//     </main>
//   );
// }