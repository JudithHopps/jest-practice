export default function JoinButton({ age }) {
  return (
    <div>
      <button disabled={age < 19}>회원가입</button>
      {age < 19 ? (
        <div>
          <h2 style={{ color: 'red' }}>19세 미만은 가입할 수 없습니다.</h2>
          <h3 style={{ color: 'red' }}>19세 미만은 가입할 수 없습니다.</h3>
        </div>
      ) : (
        <h2 style={{ color: 'blue' }}>가입할 수 있습니다.</h2>
      )}
    </div>
  );
}
