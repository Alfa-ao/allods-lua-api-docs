# От спагетти к SOLID

Эволюция ООП с помощью ClassesImplementation

---

## Карта эволюции

| Уровень | Что изменилось |
|---------|---------------|
| 0 -> 1 | Глобальные переменные собраны в таблицу |
| 1 -> 2 | Таблица стала классом. Появились тип и методы |
| 2 -> 3 | Внутренние поля скрыты префиксом `_` |
| 3 -> 4 | Повторное использование через наследование |
| 4 -> 5 | Полиморфизм через интерфейсы |
| 5 -> 6 | Композиция и внедрение зависимостей |
| 6 -> 7 | Защита инвариантов, идемпотентность |
| 7 -> SOLID | Каждый класс делает одно дело и делает его хорошо |

---

## Шпаргалка

| Задача | Решение |
|--------|---------|
| Объявить класс | `Class( "Name" )` |
| Объявить с полями | `Class( "Name", { field = value } )` |
| Наследование | `Class( "Child", Parent() )` |
| Локальный класс | `local C = LocalClass( { ... } )` |
| Создать объект | `local obj = Name()` |
| Таблицу в объект | `local obj = Name( existingTable )` |
| Проверить тип | `InstanceOf( obj, SomeClass )` |
| Только прямое членство | `InstanceOf( obj, SomeClass, true )` |
| Получить класс | `GetParentClass( obj )` |
| Имя класса | `GetClassName( GetParentClass( obj ) )` |
| Цепочка наследования | `GetObjectClassPath( obj )` |
| Отмена навешивания | `RevertClass( obj )` |
| Внутренние поля | Префикс `_` (private) |

---

## Уровень 0. Глобальный ад

Типичная стартовая точка. Состояние размазано по глобальным переменным, логика - в разношёрстных функциях.

```lua
-- ПЛОХО: всё в куче
local selectedPlace = nil
local placedCount = 0
local isRunning = false

function startTest()
    isRunning = true
    selectedPlace = "place_1"
    placedCount = 0
end

function stopTest()
    isRunning = false
    selectedPlace = nil
    placedCount = 0
end

function addIngredient()
    if not isRunning then return end
    placedCount = placedCount + 1
end
```

Проблемы видны невооружённым глазом:

- Состояние (`selectedPlace`, `placedCount`, `isRunning`) ничем не защищено. Любая функция из любого файла способна его перезаписать.
- Нет привязки данных к логике. `addIngredient` знает о `placedCount` только потому, что так исторически сложилось.
- Невозможно создать два независимых состояния. Придётся дублировать все глобальные переменные с префиксами `second_`.

---

## Уровень 1. Таблица как объект на минималках

Первый шаг к порядку - собрать состояние в таблицу и привязать к ней функции.

```lua
-- УЖЕ ЛУЧШЕ, но ещё не ООП
local state = {
    place = nil,
    count = 0,
    running = false,
}

function state:start()
    self.running = true
    self.place = "place_1"
    self.count = 0
end

function state:addIngredient()
    if not self.running then return end
    self.count = self.count + 1
end
```

Стало чище. Данные и логика рядом. Но:

- Нет контроля: кто угодно может написать `state.count = -999`.
- Нет типов: непонятно, что `state` - именно состояние чего-либо конкретного, а не просто таблица.
- Нет наследования: если понадобится расширенная версия с логированием, придётся копировать код.

На этом уровне обычно и застревают. ClassesImplementation позволяет пойти дальше.

---

## Уровень 2. Первый класс

Библиотека объявляет классы одной строкой:

```lua
Class( "TestState" )
```

После этого `TestState` доступен глобально. Создание объекта:

```lua
local state = TestState()
```

Уже можно хранить данные и методы:

```lua
Class( "TestState", {
    place = nil,
    count = 0,
    running = false,
} )

function TestState:Start()
    self.running = true
    self.place = "place_1"
    self.count = 0
end

function TestState:AddIngredient()
    if not self.running then return end
    self.count = self.count + 1
end

function TestState:Reset()
    self.running = false
    self.place = nil
    self.count = 0
end
```

Использование:

```lua
local state = TestState()
state:Start()
state:AddIngredient()
state:AddIngredient()
LogInfo( state.count )  -- 2
```

Что изменилось по сравнению с уровнем 1:

- Появился тип. `InstanceOf( state, TestState )` вернёт `true`.
- Поля, заданные при объявлении класса, стали **статическими** - общими для всех объектов, пока объект не переопределит их у себя.
- Методы вызываются через `:` - `self` передаётся автоматически.

### Ловушка статических полей

Классическая ошибка новичка - мутировать таблицу, заданную как поле класса:

```lua
Class( "BadConfig", {
    items = {},   -- общая для ВСЕХ объектов!
} )

function BadConfig:AddItem( item )
    table.insert( self.items, item )
end

local a = BadConfig()
local b = BadConfig()
a:AddItem( "sword" )
LogInfo( #b.items )  -- 1 (!) у b тоже появился sword
```

`self.items` у объекта не задано, поэтому берётся `items` из класса - одна и та же таблица на всех. Правильно:

```lua
Class( "GoodConfig" )

function GoodConfig:Init()
    self.items = {}  -- собственная таблица на каждый объект
end

function GoodConfig:AddItem( item )
    table.insert( self.items, item )
end

local a = GoodConfig()
a:Init()
local b = GoodConfig()
b:Init()
a:AddItem( "sword" )
LogInfo( #b.items )  -- 0. Порядок.
```

Правило: **таблицы и функции в полях класса - только через `Init`**. Скаляры (числа, строки, булевы) допустимо задавать в объявлении.

---

## Уровень 3. Соглашения и дисциплина

Инкапсуляция в библиотеке частичная - всё публично.

```lua
Class( "TestPlace", {
    _placed = nil,   -- внутреннее поле, не трогать снаружи
    _count = 0,      -- внутреннее поле
} )

function TestPlace:Init()
    self._placed = nil
    self._count = 0
end

function TestPlace:IsEmpty()
    return self._count == 0
end

function TestPlace:Place( item )
    if self._placed ~= nil then
        error( "TestPlace:Place() - место уже занято" )
    end
    self._placed = item
    self._count = 1
end

function TestPlace:Remove()
    local item = self._placed
    self._placed = nil
    self._count = 0
    return item
end
```

Снаружи работа идёт только через публичные методы:

```lua
local place = TestPlace()
place:Init()

-- ПРАВИЛЬНО
place:Place( "herb" )
if not place:IsEmpty() then
    local item = place:Remove()
end

-- НЕПРАВИЛЬНО (хоть и технически возможно)
place._placed = nil   -- прямое вмешательство во внутреннее состояние
place._count = -5     -- поломка инварианта
```

Префикс `_` - это контракт. Он говорит: "внутреннее, не влезать". IDE-аннотации усиливают эффект:

```lua
--- @class TestPlace
--- @field _placed string|nil
--- @field _count number
```

---

## Уровень 4. Наследование: не копируем, а расширяем

Допустим, появился новый тип с логированием каждого действия. Без наследования пришлось бы дублировать все методы. С наследованием:

```lua
Class( "TestPlace" )

function TestPlace:Init()
    self._placed = nil
    self._count = 0
end

function TestPlace:Place( item )
    self._placed = item
    self._count = 1
end

function TestPlace:Remove()
    local item = self._placed
    self._placed = nil
    self._count = 0
    return item
end

-- Наследник
Class( "LoggedTestPlace", TestPlace() )

function LoggedTestPlace:Place( item )
    TestPlace.Place( self, item )   -- вызов родительского метода
    LogInfo( "Placed: " .. tostring( item ) )
end

function LoggedTestPlace:Remove()
    local item = TestPlace.Remove( self )
    LogInfo( "Removed: " .. tostring( item ) )
    return item
end
```

Объект `LoggedTestPlace` умеет всё то же, что и `TestPlace`, плюс логирование:

```lua
local place = LoggedTestPlace()
place:Init()
place:Place( "herb" )   -- Placed: herb
place:Remove()          -- Removed: herb
```

### Проверка типа

```lua
if InstanceOf( place, TestPlace ) then
    LogInfo( "Это как минимум TestPlace" )  -- true и для наследника
end

if InstanceOf( place, LoggedTestPlace ) then
    LogInfo( "Это именно LoggedTestPlace" )
end

-- Проверка без учёта наследования
if InstanceOf( place, TestPlace, true ) then
    LogInfo( "Прямое членство в TestPlace" )  -- false для LoggedTestPlace
end
```

### Ловушка множественного наследования

Библиотека поддерживает множественное наследование через цепочку:

```lua
Class( "A" )
Class( "B" )
Class( "C", B( A() ) )
```

Но раскрутка цепочки идёт **только по основному классу**. `GetParentClass( C )` вернёт `B`, а не `A`. Для `GetParentClass` `A` не существует. Это ограничение следует учитывать при проектировании: не строить сложную ромбовидную иерархию, если планируется активно использовать `GetParentClass`.

---

## Уровень 5. Интерфейс через абстрактные методы

Lua не имеет ключевого слова `interface`. ClassesImplementation реализует паттерн через методы, которые выбрасывают ошибку:

```lua
Class( "WidgetClassInterface" )

function WidgetClassInterface:Init( widgetManager )
    error( "WidgetClassInterface:Init() must be implemented by subclass" )
end

function WidgetClassInterface:GetNativeWidget()
    error( "WidgetClassInterface:GetNativeWidget() must be implemented by subclass" )
end

function WidgetClassInterface:GetWidgetName()
    error( "WidgetClassInterface:GetWidgetName() must be implemented by subclass" )
end

function WidgetClassInterface:GetPriorityClass()
    return 0  -- реализация по умолчанию, можно не переопределять
end
```

Конкретные виджеты наследуют интерфейс:

```lua
Class( "WidgetPanel", WidgetClassInterface() )

function WidgetPanel:Init( widgetManager )
    self._widgetManager = widgetManager
    self._widget = widgetManager:CreatePanel( "panel" )
end

function WidgetPanel:GetNativeWidget()
    return self._widget
end

function WidgetPanel:GetWidgetName()
    return "panel"
end

function WidgetPanel:GetPriorityClass()
    return 20
end
```

```lua
Class( "WidgetButton", WidgetClassInterface() )

function WidgetButton:Init( widgetManager )
    self._widgetManager = widgetManager
    self._widget = widgetManager:CreateButton( "button" )
end

function WidgetButton:GetNativeWidget()
    return self._widget
end

function WidgetButton:GetWidgetName()
    return "button"
end
-- GetPriorityClass не переопределён - вернёт 0 из интерфейса
```

Теперь менеджер виджетов работает с **любым** виджетом через интерфейс, не зная конкретной реализации:

```lua
local function InitWidget( widget, widgetManager )
    if not InstanceOf( widget, WidgetClassInterface ) then
        local cls = GetParentClass( widget )
        local name = GetClassName( cls )
        error( string.format(
            "Класс '%s' не реализует WidgetClassInterface", name
        ) )
    end
    widget:Init( widgetManager )
end
```

Это уже полноценный полиморфизм. Менеджеру не важно, что перед ним - `WidgetPanel` или `WidgetButton`. Важно, что объект отвечает на `Init`, `GetNativeWidget` и `GetWidgetName`.

---

## Уровень 6. Композиция вместо наследования

Наследование - не единственный способ переиспользования. Часто правильнее **внедрить** зависимость, чем унаследовать её.

### Плохо: наследование ради доступа к чужим методам

```lua
-- ПЛОХО: TestEvents наследует WidgetManager, чтобы добраться до его методов
Class( "TestEvents", TestWidgetManager() )

function TestEvents:OnStarted()
    self:UpdatePanel()  -- метод из WidgetManager, унаследованный
end
```

Класс событий не является менеджером виджетов. Наследование здесь - обман. Рано или поздно иерархия треснет.

### Хорошо: зависимость внедряется через Init

```lua
-- ХОРОШО: события получают ссылку на менеджер
Class( "TestEvents" )

function TestEvents:Init( widgetManager, state )
    self._widgetManager = widgetManager  -- не self, а ссылка
    self._state = state
end

function TestEvents:OnStarted()
    self._widgetManager:UpdatePanel()   -- явное обращение к зависимости
end

function TestEvents:OnIngredientPlaced( ingredient )
    self._state:AddIngredient( ingredient )
end
```

Преимущества:

- Связь между классами явная и видна в `Init`.
- В тесте легко подменить `widgetManager` на заглушку.
- Нет хрупкой цепочки наследования.

### Инициализация в точке сборки

```lua
local state = TestState()
state:Init()

local widgetManager = TestWidgetManager()
widgetManager:Init( widgets, services )

local events = TestEvents()
events:Init( widgetManager, state )
```

Каждый объект получает ровно то, что ему нужно.

---

## Уровень 7. Защита от повторной инициализации

`Init` может быть вызван повторно по ошибке. Защита - флаг:

```lua
Class( "ExampleTestClass" )

function ExampleTestClass:Init( params )
    if self._initialized then
        error( "ExampleTestClass:Init() вызван повторно" )
    end
    
    self._initialized = true

    self._state = params.state
    self._config = params.config
    self._services = params.services
end
```

То же самое для `Reset` - сброс должен быть идемпотентным:

```lua
function ExampleTestClass:Reset()
    self._state = nil
    self._config = nil
    self._services = nil
    self._initialized = false
end
```

---

## Уровень 8. Превращение таблицы в объект

Уникальная особенность библиотеки — навешивание класса на существующую таблицу. Для этого используется форма `ClassName( existingTable )`.

```lua
Class( "Vector", { x = 0, y = 0 } )

function Vector:Length()
    return math.sqrt( self.x * self.x + self.y * self.y )
end

function Vector:Normalize()
    local len = self:Length()
    if len == 0 then return end
    self.x = self.x / len
    self.y = self.y / len
end

-- Обычная таблица, созданная где угодно
local data = { x = 3, y = 4 }

-- Превращаем в объект класса Vector
local vec = Vector( data )

LogInfo( vec:Length() )  -- 5
vec:Normalize()
LogInfo( vec.x )         -- 0.6
LogInfo( vec.y )         -- 0.8
```

Исходная таблица `data` и объект `vec` — одна и та же таблица. Класс не копирует данные, а навешивает метатаблицу поверх существующей.

### Осторожно: навешивание нескольких классов

Технически допустимо:

```lua
local obj = {}
obj = ClassA( obj )
obj = ClassB( obj )
obj = ClassC( obj )
```

Методы с одинаковыми именами перезапишутся, цепочка наследования станет неочевидной. Делать так настоятельно не рекомендуется. Один объект — один класс. Если нужно больше поведения — наследование или композиция.

### Отмена наложения

`RevertClass` снимает последний навешенный класс:

```lua
local obj = ClassA()
obj = ClassB( obj )
obj = RevertClass( obj )  -- ClassB снят, остался ClassA
```

Инструмент для исключительных случаев. Без полного понимания внутреннего механизма лучше не трогать.

---

## Уровень 9. Локальные классы

Не каждый класс достоин глобального имени. Вспомогательные структуры создаются локально:

```lua
local Point = LocalClass( { x = 0, y = 0 } )

function Point:DistanceTo( other )
    local dx = self.x - other.x
    local dy = self.y - other.y
    return math.sqrt( dx * dx + dy * dy )
end

local a = Point { x = 0, y = 0 }
local b = Point { x = 3, y = 4 }
LogInfo( a:DistanceTo( b ) )  -- 5
```

Имя генерируется автоматически (`localClass_000001`). В глобальное окружение класс не попадает.

---

## Уровень 10. Отладка и диагностика

Когда что-то идёт не так, на помощь приходят отладочные функции (доступны при запуске с исходным кодом):

### Определить класс объекта

```lua
local cls = GetParentClass( someObject )
local name = GetClassName( cls )
LogInfo( "Класс объекта: " .. name )
```

### Полная цепочка наследования

```lua
LogObjectClassPath( someObject )
-- Class: [WidgetPanel( WidgetClassInterface( ... ) )]
```

### Найти функцию по адресу

Непонятно, какой именно метод вызвался? Поиск по адресу:

```lua
local path = GetFunctionPathByAddress( someFunction, someObject )
LogInfo( path )
-- WidgetClassInterface.Init <- WidgetPanel.Init
```

### Сообщения об ошибках с именем класса

```lua
local function AssertInterface( object, interface, interfaceName )
    if not InstanceOf( object, interface ) then
        local cls = GetParentClass( object )
        local name = GetClassName( cls ) or "неизвестный класс"
        error( string.format(
            "Объект класса '%s' не реализует '%s'",
            name, interfaceName
        ) )
    end
end
```

Вместо безликого `attempt to index a nil value` - осмысленная диагностика.

---

## SOLID-чеклист

### S - Single Responsibility

Один класс - одна причина меняться.

```lua
-- ПЛОХО: класс делает всё
Class( "TestGod" )
function TestGod:Init() ... end
function TestGod:OnEvent() ... end
function TestGod:UpdateWidgets() ... end
function TestGod:SaveData() ... end
function TestGod:PlaySound() ... end

-- ХОРОШО: ответственности разделены
Class( "TestState" )       -- данные
Class( "TestEvents" )      -- реакции на события
Class( "TestWidgetManager" ) -- виджеты
Class( "TestSoundService" )  -- звук
```

### O - Open/Closed

Открыт для расширения, закрыт для модификации. Новый тип виджета добавляется наследованием `WidgetClassInterface`, а не правкой менеджера.

### L - Liskov Substitution

Наследник заменяем родителем. Если `LoggedTestPlace` наследует `TestPlace`, то любой код, ожидающий `TestPlace`, должен работать с `LoggedTestPlace` без сюрпризов. Переопределённый метод не должен ломать контракт родителя.

### I - Interface Segregation

Лучше несколько маленьких интерфейсов, чем один толстый.

```lua
-- ПЛОХО: один интерфейс на всё
Class( "MegaWidgetInterface" )
function MegaWidgetInterface:Init() ... end
function MegaWidgetInterface:Draw() ... end
function MegaWidgetInterface:Animate() ... end
function MegaWidgetInterface:PlaySound() ... end

-- ХОРОШО: лаконичные интерфейсы
Class( "WidgetClassInterface" )     -- Init, GetNativeWidget
Class( "AnimatableInterface" )       -- Animate, StopAnimation
Class( "SoundableInterface" )        -- PlaySound, StopSound
```

### D - Dependency Inversion

Зависеть от интерфейсов, а не от реализаций. Внедрять зависимости через `Init`, а не создавать объекты внутри класса.

```lua
-- ПЛОХО: жёсткая привязка к реализации
Class( "TestEvents" )
function TestEvents:Init()
    self._manager = TestWidgetManager()  -- конкретный класс внутри
end

-- ХОРОШО: зависимость приходит извне
Class( "TestEvents" )
function TestEvents:Init( widgetManager )
    self._manager = widgetManager  -- любой объект с нужным интерфейсом
end
```