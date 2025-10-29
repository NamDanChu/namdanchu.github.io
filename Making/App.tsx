
import React from 'react';
import SectionCard from './components/SectionCard';
import CodeBlock from './components/CodeBlock';
import { GamepadIcon, EngineIcon, PlatformIcon, BackendIcon, ControlsIcon, MapIcon, PlayerIcon, LobbyIcon, CodeIcon, SolidIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 pb-2">
            게임 기획서: 오토 서바이버즈 (Auto Survivors)
          </h1>
          <p className="text-lg text-gray-400">자동차 + 로그라이크 액션 게임</p>
        </header>

        <main className="space-y-6">
          <SectionCard title="게임 개요" icon={<GamepadIcon />}>
            <ul className="space-y-3 list-disc list-inside text-gray-300">
              <li><strong>게임 제목 (가제):</strong> 오토 서바이버즈 (Auto Survivors)</li>
              <li><strong>장르:</strong> 차량 액션 로그라이크</li>
              <li><strong>핵심 컨셉:</strong> 끊임없이 몰려오는 적들을 자동 발사되는 무기로 처치하며, 레벨업을 통해 강해지는 생존 게임</li>
              <li><strong>타겟 유저:</strong> Vampire Survivors와 같은 로그라이크 팬, 간단하고 통쾌한 액션 게임을 즐기는 캐주얼 게이머</li>
            </ul>
          </SectionCard>

          <SectionCard title="기술 스택" icon={<EngineIcon />}>
             <ul className="space-y-3 list-disc list-inside text-gray-300">
              <li><strong className="flex items-center"><EngineIcon className="w-5 h-5 mr-2 text-teal-400"/>개발 엔진:</strong> Unity 6</li>
              <li><strong className="flex items-center"><PlatformIcon className="w-5 h-5 mr-2 text-teal-400"/>타겟 플랫폼:</strong> Android, iOS (PC는 테스트 및 개발용)</li>
              <li><strong className="flex items-center"><BackendIcon className="w-5 h-5 mr-2 text-teal-400"/>백엔드 및 서비스:</strong> Firebase (인증, 데이터베이스, 원격 구성 등)</li>
            </ul>
          </SectionCard>

          <SectionCard title="플레이어 조작" icon={<ControlsIcon />}>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-teal-400">핵심 조작 메카닉</h3>
                <p className="text-gray-300">실제 자동차와 같이, 차량이 전진(가속) 상태일 때만 좌/우 방향 전환이 가능합니다. 정지 또는 후진 시에는 방향 전환이 되지 않아 전략적인 움직임이 필요합니다.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">PC (테스트용)</h4>
                    <ul className="list-disc list-inside text-gray-300">
                        <li><strong>이동:</strong> 방향키 (↑, ↓, ←, →) 또는 WASD</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">모바일 (설정에서 선택 가능)</h4>
                     <ul className="space-y-2 list-disc list-inside text-gray-300">
                        <li><strong>타입 1 (핸들):</strong>
                            <ul className="list-inside list-[circle] ml-4">
                                <li>왼쪽 하단: 핸들 UI (드래그하여 조향)</li>
                                <li>오른쪽 하단: 엑셀, 후진 버튼</li>
                            </ul>
                        </li>
                        <li><strong>타입 2 (버튼):</strong>
                            <ul className="list-inside list-[circle] ml-4">
                                <li>왼쪽 하단: 전진, 후진 버튼</li>
                                <li>오른쪽 하단: 좌회전, 우회전 버튼</li>
                            </ul>
                        </li>
                    </ul>
                  </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="월드 및 적 디자인" icon={<MapIcon />}>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-teal-400">맵 (World)</h3>
                    <p className="text-gray-300">플레이어 주변으로 맵이 절차적으로 계속 생성되는 '무한 맵' 방식입니다. 플레이어는 맵의 경계에 갇히지 않고 자유롭게 탐험하며 적과 싸울 수 있습니다.</p>
                </div>
                <div>
                    <h3 className="font-bold text-teal-400">적 (Enemies)</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>적들은 맵에서 지속적으로 생성되어 플레이어를 향해 다가옵니다.</li>
                        <li>플레이어와 충돌 시, 적 차량은 파괴되며 플레이어에게 데미지를 입힙니다.</li>
                        <li>다양한 종류의 적을 추가하여 전략성을 높일 수 있습니다. (예: 빠른 속도로 돌진하는 적, 원거리 공격을 하는 적, 체력이 높은 탱커형 적 등)</li>
                    </ul>
                </div>
            </div>
          </SectionCard>

          <SectionCard title="플레이어 시스템 및 인게임 성장" icon={<PlayerIcon />}>
             <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-teal-400">공격 시스템</h3>
                    <p className="text-gray-300">플레이어 차량 전방에서 자동으로 총알이 계속 발사됩니다. 플레이어는 조준할 필요 없이 이동과 회피에만 집중하면 됩니다.</p>
                </div>
                <div>
                    <h3 className="font-bold text-teal-400">무기 시스템</h3>
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>게임 시작 시 기본 총기 1개를 장착합니다.</li>
                        <li>레벨업 보상 등을 통해 최대 2개의 추가 무기를 장착하여 총 3개의 무기를 동시에 사용할 수 있습니다.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-teal-400">로그라이크 성장 (레벨업)</h3>
                     <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>적을 처치하면 경험치를 얻고, 경험치가 가득 차면 레벨업합니다.</li>
                        <li>레벨업 시, 3개의 무작위 선택지가 제시되며 플레이어는 하나를 선택하여 즉시 강해집니다.</li>
                        <li><strong>선택지 종류:</strong>
                            <ul className="list-inside list-[circle] ml-4 mt-1">
                                <li><strong>스탯 강화:</strong> 이동 속도 증가, 공격력 증가, 최대 체력 증가 등</li>
                                <li><strong>신규 무기 획득:</strong> 산탄총, 유도 미사일 등 새로운 무기 장착</li>
                                <li><strong>기존 무기 업그레이드:</strong> 연사 속도 증가, 투사체 수 증가, 범위 증가 등</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
          </SectionCard>
          
          <SectionCard title="로비 및 영구적 성장" icon={<LobbyIcon />}>
             <div className="space-y-4">
                <p className="text-gray-300">게임 플레이(런)가 끝나면 로비로 돌아와 보상으로 얻은 재화를 사용하여 영구적으로 캐릭터를 강화할 수 있습니다.</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>자동차 강화:</strong> 게임 내 재화를 소모하여 공격력, 방어력, 속도 등 기본 스탯을 영구적으로 상승시킵니다.</li>
                    <li><strong>부품 장착:</strong> 특수한 효과를 가진 부품(파츠)을 장착하여 패시브 스킬과 같은 효과를 얻습니다. (예: '터보차저' - 이동속도 +5%)</li>
                    <li><strong>무기 관리:</strong> 새로운 시작 무기를 해금하거나, 장착할 시작 무기를 변경합니다.</li>
                    <li><strong>스킨 변경:</strong> 자동차의 외형을 바꾸는 꾸미기 요소입니다.</li>
                </ul>
            </div>
          </SectionCard>

          <SectionCard title="Firebase 연동 계획" icon={<CodeIcon />}>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Authentication:</strong> Google Play, Apple Game Center, 이메일 등 간편 로그인으로 유저 계정을 관리합니다.</li>
                <li><strong>Firestore:</strong> 유저의 재화, 영구 강화 레벨, 해금한 무기/부품/스킨 등 핵심 데이터를 저장합니다.</li>
                <li><strong>Remote Config:</strong> 앱 업데이트 없이 게임 밸런스(적 체력, 무기 데미지, 재화 획득량 등)를 실시간으로 조정합니다.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Unity C# 코드 예시 (SOLID 원칙 적용)" icon={<SolidIcon />}>
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg text-teal-400 mb-2">S: 단일 책임 원칙 (SRP)</h3>
                    <p className="text-gray-300 mb-3">하나의 클래스는 하나의 책임만 갖도록 분리합니다. `Player` 클래스를 `PlayerController` (이동 담당)와 `PlayerHealth` (체력 담당)로 나눕니다.</p>
                    <CodeBlock code={`// 👍 Good: Responsibilities are separated

// PlayerController.cs - Handles only movement
public class PlayerController : MonoBehaviour
{
    public float speed;
    void Update() { /* ... handle input and move ... */ }
}

// PlayerHealth.cs - Handles only health
public class PlayerHealth : MonoBehaviour
{
    public int health;
    public void TakeDamage(int amount) { /* ... reduce health ... */ }
}`} />
                </div>
                 <div>
                    <h3 className="font-bold text-lg text-teal-400 mb-2">O: 개방-폐쇄 원칙 (OCP)</h3>
                    <p className="text-gray-300 mb-3">기존 코드를 수정하지 않고도 기능을 확장할 수 있어야 합니다. `IWeapon` 인터페이스를 통해 새로운 무기를 쉽게 추가할 수 있습니다.</p>
                    <CodeBlock code={`// IWeapon.cs - The abstraction (the "open for extension" part)
public interface IWeapon
{
    void Attack();
}

// WeaponController.cs - Manages any IWeapon (the "closed for modification" part)
public class WeaponController : MonoBehaviour
{
    private List<IWeapon> weapons;
    void Update()
    {
        foreach (var weapon in weapons)
        {
            weapon.Attack();
        }
    }
}

// MachineGun.cs - A concrete implementation
public class MachineGun : MonoBehaviour, IWeapon
{
    public void Attack() { /* ... fire machine gun bullets ... */ }
}

// To add a new "Laser" weapon, just create a new Laser.cs file.
// No changes are needed in WeaponController.cs!`} />
                </div>
                 <div>
                    <h3 className="font-bold text-lg text-teal-400 mb-2">L: 리스코프 치환 원칙 (LSP)</h3>
                    <p className="text-gray-300 mb-3">자식 클래스는 부모 클래스를 대체할 수 있어야 합니다. 모든 적(`MeleeEnemy`, `RangedEnemy`)은 `BaseEnemy`로 취급될 수 있어 코드의 유연성을 높입니다.</p>
                    <CodeBlock code={`// BaseEnemy.cs - The base class
public abstract class BaseEnemy : MonoBehaviour
{
    public int health;
    public abstract void Move();
    public virtual void TakeDamage(int amount) { /* ... */ }
}

// MeleeEnemy.cs - A specific enemy type
public class MeleeEnemy : BaseEnemy
{
    public override void Move() { /* ... charge towards the player ... */ }
}

// The player's bullet script doesn't care which enemy it hits.
// It can call TakeDamage() on any object of type BaseEnemy.`} />
                </div>
                 <div>
                    <h3 className="font-bold text-lg text-teal-400 mb-2">I: 인터페이스 분리 원칙 (ISP)</h3>
                    <p className="text-gray-300 mb-3">하나의 거대한 인터페이스보다 여러 개의 구체적인 인터페이스가 낫습니다. 필요한 기능만 구현하도록 `IDamageable`, `IHealable` 등으로 분리합니다.</p>
                    <CodeBlock code={`// 👍 Good: Smaller, more specific interfaces
public interface IDamageable
{
    void TakeDamage(int amount);
}

public interface IHealable
{
    void Heal(int amount);
}

// An enemy car might only be damageable
public class EnemyCar : MonoBehaviour, IDamageable
{
    public void TakeDamage(int amount) { /* ... */ }
}

// The player can be damaged AND healed
public class Player : MonoBehaviour, IDamageable, IHealable
{
    public void TakeDamage(int amount) { /* ... */ }
    public void Heal(int amount) { /* ... */ }
}`} />
                </div>
                 <div>
                    <h3 className="font-bold text-lg text-teal-400 mb-2">D: 의존성 역전 원칙 (DIP)</h3>
                    <p className="text-gray-300 mb-3">세부 구현이 아닌 추상화에 의존해야 합니다. `PlayerController`는 `PCInput`이나 `MobileInput` 클래스가 아닌 `IInput` 인터페이스에 의존하여 결합도를 낮춥니다.</p>
                    <CodeBlock code={`// IInput.cs - The abstraction
public interface IInput
{
    float ForwardInput { get; }
    float TurnInput { get; }
}

// PCInput.cs - Concrete implementation for PC
public class PCInput : IInput
{
    public float ForwardInput => Input.GetAxis("Vertical");
    public float TurnInput => Input.GetAxis("Horizontal");
}

// PlayerController.cs - High-level module depends on the IInput interface
public class PlayerController : MonoBehaviour
{
    private IInput _input;

    void Awake()
    {
        // Decide which input system to use based on the platform
        #if UNITY_STANDALONE
            _input = new PCInput();
        #else
            // _input = new MobileInput(); // Assign mobile input handler here
        #endif
    }
    
    void Update()
    {
        // Controller uses the interface, doesn't know the concrete type
        float forward = _input.ForwardInput;
        float turn = _input.TurnInput;
        // ... apply movement
    }
}`} />
                </div>
            </div>
          </SectionCard>
        </main>
        
        <footer className="text-center mt-12 py-4 border-t border-gray-700">
          <p className="text-gray-500">GDD generated by World-class Senior Frontend React Engineer.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
