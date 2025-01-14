import Database from 'better-sqlite3';
import path from 'path';
// export const dynamic = 'force-static'
export async function getData() {

  const db = new Database(path.join(process.cwd(), 'data/dua_main.sqlite'));

  try {
    
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    const subcategories =  db.prepare("SELECT * FROM sub_category").all();
    const categories  = db.prepare("SELECT * FROM category").all();
    const dua  =  db.prepare("SELECT * FROM dua").all();
   

    // Send the rows as a JSON response
    return Response.json({ tables, categories , subcategories , dua}, {status: 200})
  
  } catch (err) {
    console.error('Error querying database:', err);
    // return res.status(500).json({error : 'Error fetching'})
    return Response.json({error : 'Error fetching'}, {status: 500})
  } finally {
    db.close();
  }
  }


   