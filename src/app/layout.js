'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
import React from 'react';
export default function RootLayout({ children }) {
  const currentPath = usePathname();
  return (
    <html>
          <head>
              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <link rel="shortcut icon" href="images/favicon.png" type=""/>
              <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
              <link href="css/font-awesome.min.css" rel="stylesheet" />
              <link href="css/style.css" rel="stylesheet" />
              <link href="css/responsive.css" rel="stylesheet" />
              <script src="js/jquery-3.4.1.min.js"></script>
              <script src="js/popper.min.js"></script>
              <script src="js/bootstrap.js"></script>
          </head>
           <body>
             <div className="hero_area">
             <header className="header_section">
                  <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" href="/">
                          <img width="250" src="images/logo.png" alt="#" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className=""> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav">
                              <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/">Home</Link>
                              </li>
                              <li className={`nav-item ${currentPath === '/about' ? 'active' : ''}`}>
                                 <Link  className="nav-link" href="/about">About</Link>
                              </li>
                              <li className={`nav-item ${currentPath === '/products' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/products">Products</Link>
                              </li>
                              <li className={`nav-item ${currentPath === '/blog' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/blog">Blog</Link>
                              </li>
                              <li className={`nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
                                <Link className="nav-link" href="/contact">Contact</Link>
                              </li>
                          </ul>
                        </div>
                    </nav>
                  </div>
                </header>
                  {children}
                <footer>
                  <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                            <div className="full">
                                <div className="logo_footer">
                                  <a href="#"><img width="210" src="images/logo.png" alt="#" /></a>
                                </div>
                                <div className="information_f">
                                  <p><strong>ADDRESS:</strong> 20000 test, Delhi</p>
                                  <p><strong>TELEPHONE:</strong> +91 0000000000</p>
                                  <p><strong>EMAIL:</strong> test@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                            <div className="col-md-7">
                              <div className="row">
                                  <div className="col-md-6">
                              <div className="widget_menu">
                                  <h3>Menu</h3>
                                  <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/products">Products</Link></li>
                                    <li><Link href="/testimonial">Testimonial</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                  </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="widget_menu">
                                  <h3>Account</h3>
                                  <ul>
                                    <li><Link href="#">Account</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/login">Login</Link></li>
                                    <li><Link href="/register">Register</Link></li>
                                    <li><Link href="#">Shopping</Link></li>
                                    <li><Link href="#">Widget</Link></li>
                                  </ul>
                              </div>
                            </div>
                              </div>
                            </div>     
                            <div className="col-md-5">
                              <div className="widget_menu">
                                  <h3>Newsletter</h3>
                                  <div className="information_f">
                                    <p>Subscribe by our newsletter and get update protidin.</p>
                                  </div>
                                  <div className="form_sub">
                                    <form>
                                        <fieldset>
                                          <div className="field">
                                              <input type="email" placeholder="Enter Your Mail" name="email" />
                                              <input type="submit" value="Subscribe" />
                                          </div>
                                        </fieldset>
                                    </form>
                                  </div>
                              </div>
                            </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </footer>
                  <div className="cpy_">
                  <p className="mx-auto">© 2021 All Rights Reserved By <a href="#"> Test </a>
                      Distributed By <a href="#" target="_blank">Test</a>
                  
                  </p>
                </div>
              </div>
           </body>
       
        </html>
  );
}
