import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='py-5'>
            <Container>
                <div className='border p-3 mb-3'>
                    <h4>What is the difference between javascript and nodejs?</h4>
                    <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.JavaScript is normally used for any client-side activity for one web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation.</p>
                </div>
                <div className='border p-3 mb-3'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p>Nodejs is a Javascript engine that you can write any application you want with programming in the Javascript language. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data and its very easy to use.</p>
                </div>
                <div className='border p-3 mb-3'>
                    <h4>What is the differences between SQL and NoSQL databases?</h4>
                    <p>When choosing a modern database, one of the biggest decisions is picking a relational SQL or non-relational NoSQL data structure. While both are viable options, there are some differences that - SQL databases are relational, NoSQL databases are non-relational. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className='border p-3'>
                    <h4>What is the purpose of jwt and how does it work?</h4>
                    <p>JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. JWT is most use for secure user data from others.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;