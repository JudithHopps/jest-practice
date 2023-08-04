export default function Mypage({ user }) {
  return (
    <>
      {user?.name ? (
        <h1>Hello {user.name}</h1>
      ) : (
        <div>
          <h1>로그인을 해주세요.</h1>
          <button>로그인</button>
        </div>
      )}

      <div data-testid="test" />
      <div style={{ marginTop: 20 }}>
        <div>
          <label htmlFor="userName">이름</label>
          <input type="text" id="userName" readOnly />
        </div>
        <div>
          <label htmlFor="profile">자기소개</label>
          <textarea id="profile" value={'introduce'} readOnly></textarea>
        </div>
      </div>
    </>
  );
}
