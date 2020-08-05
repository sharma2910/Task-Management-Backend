class FriendsList {
    friends = [];

    addFriend(name) {
        this.friends.push(name);
        this.announceFriendship(name);
    }

    announceFriendship(name) {
        global.console.log(`${name} is now a friend`);
    }
}

describe('FriendsList', () => {
    let friendList;

    beforeEach(() => {
        friendList = new FriendsList()
    })

    it('Initializes Friends List', () => {
        expect(friendList.friends.length).toEqual(0)
    })

    it('Adds a Friend to The list', () => {
        friendList.addFriend('Darshit');
        expect(friendList.friends.length).toEqual(1);
    })

    it('Announces Friendship', () => {
        friendList.announceFriendship = jest.fn();
        expect(friendList.announceFriendship).not.toHaveBeenCalled();
        friendList.addFriend('Darshit');
        expect(friendList.announceFriendship).toHaveBeenCalledWith('Darshit');
    })
});
