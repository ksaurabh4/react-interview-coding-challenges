// import cx from "classnames";
// import { Component } from "react";

// export default class LikeDislike extends Component {
//   state = { like: 100, dislike: 25, liked: false, disliked: false };
//   onLikeClickHandler = () => {
//     if (this.state.disliked) {
//       this.setState({
//         dislike: this.state.dislike - 1,
//         like: this.state.like + 1,
//         disliked: !this.state.disliked,
//         liked: !this.state.liked,
//       });
//     } else if (this.state.liked) {
//       this.setState({ like: this.state.like - 1, liked: !this.state.liked });
//     } else {
//       this.setState({ like: this.state.like + 1, liked: !this.state.liked });
//     }
//   };
//   onDislikeClickHandler = () => {
//     if (this.state.liked) {
//       this.setState({
//         dislike: this.state.dislike + 1,
//         like: this.state.like - 1,
//         disliked: !this.state.disliked,
//         liked: !this.state.liked,
//       });
//     } else if (this.state.disliked) {
//       this.setState({
//         dislike: this.state.dislike - 1,
//         disliked: !this.state.disliked,
//       });
//     } else {
//       this.setState({
//         dislike: this.state.dislike + 1,
//         disliked: !this.state.disliked,
//       });
//     }
//   };
//   render() {
//     return (
//       <>
//         <div>
//           <button
//             className={`like-button ${this.state.liked && "liked"}`}
//             onClick={this.onLikeClickHandler}
//           >
//             Like|<span>{this.state.like}</span>
//           </button>
//           <button
//             className={`dislike-button ${this.state.disliked && "disliked"}`}
//             onClick={this.onDislikeClickHandler}
//           >
//             Dislike|
//             <span className="dislikes-counter">{this.state.dislike}</span>
//           </button>
//         </div>
//         <style>{`
//                     .like-button, .dislike-button {
//                         font-size: 1rem;
//                         padding: 5px 10px;
//                         color:   #585858;
//                     }

//                     .liked, .disliked {
//                         font-weight: bold;
//                         color: #1565c0;
//                     }
//                 `}</style>
//       </>
//     );
//   }
// }

// import React, { useState } from "react";

// // Use functional or class component based on your preference.
// // Make it a default export.

// export default function LoginForm({ onSubmit }) {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const onSubmitHandler = () => {
//     onSubmit(username, password);
//   };
//   return (
//     <div>
//       <input
//         id="username-input"
//         type="text"
//         value={username}
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         id="password-input"
//         type="text"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button
//         id="login-button"
//         onClick={onSubmitHandler}
//         disabled={!(username && password)}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// import React from "react";

// const Carousel = ({ delay, children }) => {
//   // { delay, children }
//   // let delay = 2000;
//   // const children = [1, 2, 3, 4, 5, 6];
//   const [currentChild, setCurrentChild] = React.useState(0);
//   const [delayTime, setDelayTime] = React.useState(delay || 0);
//   const autoChange = () => {
//     if (currentChild === children.length - 1) {
//       setCurrentChild(0);
//     } else setCurrentChild(currentChild + 1);

//     setDelayTime(delay);
//   };

//   React.useEffect(() => {
//     setTimeout(autoChange, delayTime);
//   }, []);

//   const nextButtonHandler = () => {
//     if (currentChild === children.length - 1) {
//       setCurrentChild(0);
//     } else setCurrentChild(currentChild + 1);

//     setDelayTime(delay);
//   };
//   const previousButtonHandler = () => {
//     if (currentChild === 0) {
//       setCurrentChild(children.length - 1);
//     } else {
//       setCurrentChild(currentChild - 1);
//     }
//     setDelayTime(delay);
//   };
//   return (
//     <div className="carousel">
//       <div className="current">
//         {(children && children.length > 0 && children[currentChild]) ||
//           (children && children.length === 0 && <div></div>)}
//       </div>
//       {children && children.length > 1 && (
//         <div className="buttons">
//           <button className="button-previous" onClick={previousButtonHandler}>
//             Previous
//           </button>
//           <button className="button-next" onClick={nextButtonHandler}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;
