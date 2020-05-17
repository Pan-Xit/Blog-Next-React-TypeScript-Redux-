import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
// Styles
import styled from 'styled-components';
// Components
import Wrapper from '../../containers/Wrapper/Wrapper';
import Comments from '../../containers/Comments/Comments';
// Gateway
import { fetchPost } from '../../gateway/gateway';
// Store
import { setPost } from '../../store/actions';
// Types
import { PostType } from '../../types/posts';


const StyledH1 = styled.h1`
  text-align: center;
`

interface Props {
  initPost: PostType;
  post: PostType;
  onSetPost(post: PostType): void;
}

const PostPage: React.FC<Props> = ({ initPost, post, onSetPost }) => {
  useEffect(
    () => {
      if (!post) onSetPost(initPost)
    }
  )

  const context = post ? post : initPost;

  return (
    <Wrapper>
      <Head>
        <title>{context.title}</title>
      </Head>
      <StyledH1>{context.title}</StyledH1>
      <div>{context.body}</div>
      <Comments comments={context.comments} postId={context.id} />
    </Wrapper>
  )
}

export async function getServerSideProps({ params, ...rest }) {
  const post: PostType = await fetchPost(params.postId);

  return {
    props: {
      initPost: post,
    },
  }
}

const mapStateToProps = (state) => ({
  post: state,
})

const mapDispatchToProps = (dispatch) => ({
  onSetPost: (post) => dispatch(setPost(post))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostPage);