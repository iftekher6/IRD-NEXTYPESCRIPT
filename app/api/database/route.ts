import Database from 'better-sqlite3';

import path from 'path';


// export const dynamic = 'force-static'
export async function GET() {
  // const db = new Database('./../data/dua_main.sqlite'); // Update with the correct path
  // Check HTTP method
  // if (req.method !== 'GET') {
  //   return res.status(405).json({ error: 'Method Not Allowed' });
  // }
  const db = new Database(path.join(process.cwd(), 'data/dua_main.sqlite'));


  try {
    // Prepare and execute the query
    // const fakeData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const response = await fakeData.json()
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    const subcategories =  db.prepare("SELECT * FROM sub_category").all();
    const categories  = db.prepare("SELECT * FROM category").all();
    const dua  =  db.prepare("SELECT * FROM dua").all();
   

    // Send the rows as a JSON response
    return Response.json({ tables, categories , subcategories , dua}, {status: 200})
    // res.status(200).json({ data: categories,
    //     subcategories,
    //     dua });
    // return NextResponse.json( {
    //   category,
    //   sub_category,
    //   dua
    // },{status : 200})
  } catch (err) {
    console.error('Error querying database:', err);
    // return res.status(500).json({error : 'Error fetching'})
    return Response.json({error : 'Error fetching'}, {status: 500})
  } finally {
    db.close();
  }
  }


   