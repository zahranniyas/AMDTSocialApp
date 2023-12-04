import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyles';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Ahamad',
      id: 1,
      profileImage: require('./assets/images/ahmad_pfp.png'),
    },
    {
      firstName: 'Azaad',
      id: 2,
      profileImage: require('./assets/images/azaad_pfp.png'),
    },
    {
      firstName: 'Ilham',
      id: 3,
      profileImage: require('./assets/images/ilham_pfp.png'),
    },
    {
      firstName: 'Shameer',
      id: 4,
      profileImage: require('./assets/images/shameer_pfp.png'),
    },
    {
      firstName: 'Sarah',
      id: 5,
      profileImage: require('./assets/images/sarah_pfp.png'),
    },
    {
      firstName: 'Aaqib',
      id: 6,
      profileImage: require('./assets/images/aaqib_pfp.png'),
    },
    {
      firstName: 'Sylie',
      id: 7,
      profileImage: require('./assets/images/sylie_pfp.png'),
    },
    {
      firstName: 'Shakira',
      id: 8,
      profileImage: require('./assets/images/shakira_pfp.png'),
    },
    {
      firstName: 'Insaf',
      id: 9,
      profileImage: require('./assets/images/insaf_pfp.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Sahan',
      lastName: 'Akalanka',
      location: 'Colombo 03',
      likes: 135,
      comments: 12,
      shares: 3,
      image: require('./assets/images/sahan_post_1.png'),
      caption:
        'Checkout my new UI design for a coffee shop. This is still a work in progress. More to come!! #ux_design',
      profileImage: require('./assets/images/sahan_pfp.png'),
      id: 1,
    },
    {
      firstName: 'Shafni',
      lastName: 'Rafaideen',
      location: '',
      likes: 241,
      comments: 45,
      shares: 14,
      image: require('./assets/images/shafni_post.png'),
      caption: 'Life at AMDT. Love these guys <3 #campus #ux_design',
      profileImage: require('./assets/images/shafni_pfp.png'),
      id: 2,
    },
    {
      firstName: 'Oshan',
      lastName: 'Madushanka',
      location: 'Avissawela',
      likes: 29,
      comments: 1,
      shares: 0,
      image: require('./assets/images/oshan_post.png'),
      caption:
        'Working on the 3D Modelling final assignment. This is tougher than I thought. Might need to get an extension :( #vfx',
      profileImage: require('./assets/images/oshan_pfp.png'),
      id: 3,
    },
    {
      firstName: 'Sangeeth',
      lastName: 'Nipuna',
      location: 'Colombo 06',
      likes: 350,
      comments: 87,
      shares: 48,
      image: require('./assets/images/sangeeth_post.png'),
      caption: 'Done and Dusted! #graphic_design #degree #ba',
      profileImage: require('./assets/images/sangeeeth_pfp.png'),
      id: 4,
    },
    {
      firstName: 'Zaharan',
      lastName: 'Niyas',
      location: 'Colombo 09',
      likes: 137,
      comments: 16,
      shares: 4,
      image: require('./assets/images/zaharan_post.png'),
      caption: 'Checkout my new UI design for a coffee shop',
      profileImage: require('./assets/images/zaharan_pfp.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.headView}>
                <Title />
                <TouchableOpacity style={globalStyle.msgButtonBg}>
                  <FontAwesomeIcon
                    style={globalStyle.msgButtonIco}
                    icon={faEnvelope}
                    size={20}
                  />
                  <View style={globalStyle.msgButtonCount}>
                    <Text style={globalStyle.msgButtonCountNum}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <UserPost
              key={'userPosts' + item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              image={item.image}
              caption={item.caption}
              profileImage={item.profileImage}
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
