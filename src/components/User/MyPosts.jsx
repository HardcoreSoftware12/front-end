import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Cards from './Cards'
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyPosts() {
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Boost your conversion rate',
  //     href: '#',
  //     description:
  //       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  //     date: 'Mar 16, 2020',
  //     datetime: '2020-03-16',
  //     category: { title: 'Marketing', href: '#' },
  //     author: {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       href: '#',
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   // More posts...
  // ]
  const [posts, setPosts] = useState([]);
  async function getMyPosts(){
    try {
      const res = await axios.get("http://localhost:3000/notes/mypost");
      setPosts(res.data.posts)
      // console.log(posts);
      
    } catch (error) {
      console.error(error)     
    }
    
  }

  useEffect(()=>{
    getMyPosts();

  },[])

    
  return (
    <div className='mx-auto w-[90%]'>
      {/* <Cards/> */}
      <ul>
        {posts.map(post => (
          <li key={post._id} className='mt-10'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Posted by: {post.userId}</p>
            <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
            <Link to="">Update</Link>
            <Link>Delete</Link>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>

    </div>
    
    // <div className="bg-white py-24 sm:py-32 ">
//     <div className='w-[90%] mx-auto mt-5'>
//     <div className='w-full p-5 desktop:flex justify-between gap-10 p-0 mt-10 '>
//       <div className="w-[100%] mt-10 space-y-5 desktop:w-[40%]  ">
//         <p>TOOLS AND TUTORIALS 10 MINUTE READ</p>
//         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Design High-converting Websites With These Webflow Best Practices</h2>
//         <p className="mt-2 text-lg leading-8 text-gray-600">
//         Webflow can cut website design time in half—enabling designers to devote more attention to driving traffic and boosting conversions.
//         </p>

//         <div className="relative mt-8 flex items-center gap-x-4 ">
//               <img src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1334817%2Fretina_500x200_Designing-High-Converting-Websites-Leverage-Webflow-for-Business-Success_Blog-0b73de8aee9299d8824d8b58598b6037.png" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
//               <div className="text-sm leading-6">
//                 <p className="font-semibold text-gray-900">
                  
//                     <span className="absolute inset-0" />
//                     By Winsent Churchhill
                  
//                 </p>
//                 <p className="text-gray-600">Web Developer</p></div>
//     </div>


//       </div>
//       <div className='w-full mt-4 desktop:w-[60%] bg-cover'>
//         <img className='w-full' src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1334817%2Fretina_500x200_Designing-High-Converting-Websites-Leverage-Webflow-for-Business-Success_Blog-0b73de8aee9299d8824d8b58598b6037.png" alt="" />

//       </div>
//     </div>

//     <div className='w-[80%] mx-auto text-[25px] mt-10'>
//       <p>
//       In addition to designing a functional and aesthetically pleasing website, you will need to find and manage the many tools and data sources your clients need to run their sites after the project ends, which can be challenging. Fortunately, Webflow brings a host of integrations and tracking tools together in one place.

// For instance, I once enabled multilingual support on a client’s Webflow site by integrating a third-party translation provider. With this simple yet efficient fix, the client’s website became accessible to a broader range of users worldwide. Additionally, with integrations for e-commerce systems such as Shopify and WooCommerce, you can empower your clients to process orders, sync product catalogs, and administer their online shops from a single dashboard.

// Webflow’s integration with analytics and reporting services like Hotjar and Google Analytics allows you to evaluate the effectiveness of a site’s design. For instance, you can pinpoint pages and components needing UI and UX improvements by leveraging data such as heatmaps, rage clicks, and bounce rates.

// Once I’ve set up integrations for a client’s site, I utilize them to include fresh features and functionality, such as email opt-in forms, product pages, and social network feeds. Integrations may also be used to automate processes and save time on things like newsletter distribution and social media posting.

// In addition, I use Webflow’s fine-grained front-end SEO controls to boost my clients’ search performance and draw more traffic to their sites. With simple menus and semantic controls for image sizing, page titles and descriptions, meta descriptions, URL redirects, and loading preferences, you can optimize a site with minimal reliance on external plugins or engineering support.

// Finally, an AWS-powered hosting stack distributed across 100 data centers (one of the factors that appealed to my consultancy client) ensures sites load fast and can handle heavy traffic. This ability is beneficial for site visitors and also boosts clients’ site rankings in search engines that factor load speed into their algorithms.

// Fields like title tag and meta description enable users to optimize a page.
// Fundamental SEO configurations in Webflow’s CMS, such as title tags and meta descriptions, can impact the click-through rate of Google search results. (Pavle Lucic)
// A Scalable Solution
// It’s worth noting that Webflow isn’t without drawbacks. The company offers a free starter plan, but premium options can be pricey, particularly for larger teams or enterprises. For companies that want to create a highly customized site with advanced functionalities, such as image galleries and order booking systems, it may not be the best fit. Webflow does offer a method for adding custom code, but the results are less nuanced than what a developer can accomplish with a code editor, and users unfamiliar with HTML, CSS, and JavaScript will find the feature fairly unhelpful.

// Still, I appreciate the cost and time savings Webflow offers. In my experience, its collaboration features are key for boosting efficiency by allowing marketing, design, and engineering teams to co-create websites in real time, rather than in siloes, so important ideas don’t get lost. Beyond that, I’ve found Webflow to be an extremely user-friendly tool. With these Webflow best practices and little to no coding experience, designers can make responsive websites with attractive layouts and design elements superior to those of their competitors. Most of all, the speed of Webflow as a design tool allows me to quickly adapt a website to user and client needs and iterate as needed to boost conversions.
//       </p>
//     </div>
//     {/* <Footer/>  */}

   
//    </div>
  )
}

export default MyPosts