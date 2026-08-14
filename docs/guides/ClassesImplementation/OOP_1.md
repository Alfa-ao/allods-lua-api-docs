# Объектно-ориентированное программирование на Lua с использованием ClassesImplementation

## Введение

Библиотека `ClassesImplementation.lua` реализует полноценную систему классов для языка Lua в среде Аллоды Онлайн. Механизм обеспечивает поддержку наследования, полиморфизма и частичной инкапсуляции. Все поля объектов и методы классов являются публичными.

---

## 1. Объявление класса

Для объявления класса используется глобальная функция `Class`:

```lua
Class( "MyClass" )
```

Первый аргумент - строковое имя класса. После объявления класс становится доступен в глобальном окружении под указанным именем.

### Класс с начальными полями

Допускается передача таблицы с полями и методами по умолчанию:

```lua
Class( "AlchemyConfig", {
    MAX_DISPLAY_RESULTS = 6,
    DEBUG = false,
} )
```

Все пары ключ-значение становятся **статическими полями** класса.

### Класс с наследованием

```lua
Class( "ChildClass", ParentClass() )
```

Второй аргумент - экземпляр родительского класса (результат вызова `ParentClass()`).

---

## 2. Создание объектов

Экземпляр класса создаётся вызовом имени класса как функции:

```lua
local config = AlchemyConfig()
local state  = AlchemyState()
```

Каждый объект получает собственную таблицу, связанную метатаблицей с классом.

### Превращение существующей таблицы в объект

Уникальная особенность библиотеки - возможность "навесить" класс на уже существующую таблицу:

```lua
local widget = { x = 10, y = 20 }
widget = MyWidgetClass( widget )
```

После этого таблица получает доступ ко всем методам класса. На один объект допускается наложить несколько классов последовательно, однако такой подход применять не рекомендуется.

---

## 3. Поля: статические и экземплярные

### Разрешение доступа

При обращении к полю объекта поиск выполняется в следующем порядке:

1. Поле в самом объекте
2. Поле в классе (статическое)

```lua
Class( "C", { value = 123 } )

local a = C()
local b = C()

LogInfo( a.value )  -- 123 (из класса)
LogInfo( b.value )  -- 123 (из класса)

b.value = 456       -- поле записано в объект b

LogInfo( a.value )  -- 123 (из класса, в объекте не задано)
LogInfo( b.value )  -- 456 (из объекта)
LogInfo( C.value )  -- 123 (статическое поле класса)

C.value = 789       -- изменение статического поля

LogInfo( a.value )  -- 789 (из класса)
LogInfo( b.value )  -- 456 (из объекта, переопределено)
```

### Правило

Запись поля в объект создаёт собственную копию в экземпляре, не затрагивая класс и другие объекты. Изменение статического поля класса отражается на всех объектах, в которых данное поле не переопределено.

---

## 4. Методы

### Определение

Метод определяется с использованием синтаксиса `ClassName:MethodName`:

```lua
function AlchemyState:ResetPlace()
    self.place.placed = nil
    self.place.count = 0
end
```

Ключевое слово `self` ссылается на экземпляр объекта, для которого вызван метод.

### Вызов

```lua
local state = AlchemyState()
state:ResetPlace()   -- вызов через двоеточие (self передаётся автоматически)
```

Допускается также вызов в статическом стиле с явной передачей объекта:

```lua
AlchemyState.ResetPlace( state )
```

### Важное замечание

Любой метод можно попытаться вызвать как статический:

```lua
C:Log()      -- self = класс C (не объект)
C.Log( obj ) -- self = obj
```

Если метод обращается к полям экземпляра, а вызов выполнен без передачи объекта, возникнет ошибка.

---

## 5. Наследование

### Одиночное наследование

```lua
Class( "EventClassInterface", {
    _state  = nil,
    _config = nil,
} )

function EventClassInterface:Init( state, config )
    error( "Must be implemented by subclass" )
end

Class( "AlchemyEvents", EventClassInterface() )

function AlchemyEvents:Init( state, config )
    self._state  = state
    self._config = config
end

function AlchemyEvents:GetEventMap()
    return {
        EVENT_ALCHEMY_STARTED = self.OnStarted,
    }
end
```

Дочерний класс получает доступ ко всем полям и методам родителя. Переопределённые методы замещают родительские.

### Множественное наследование

```lua
Class( "D", B( C() ) )
```

Цепочка наследования раскручивается только по **основным** классам. Функция `GetParentClass` идёт исключительно по основной цепочке.

### Вызов родительского метода

```lua
Class( "DnDManagerExtends", DnDManager() )

function DnDManagerExtends:Init( params )
    -- Вызов родительского Init
    DnDManager.Init( self, params )
    -- Дополнительная логика
end
```

---

## 6. Проверка типов

### InstanceOf

Проверяет принадлежность объекта к классу с учётом всей цепочки наследования:

```lua
if InstanceOf( handler, _G.EventClassInterface ) then
    handler:Init( table.unpack( context ) )
else
    local objectClass = GetParentClass( handler )
    local className = GetClassName( objectClass )
    error( string.format(
        "Unsupported class '%s' does not implement 'EventClassInterface'",
        className
    ) )
end
```

Параметры:
- `object` - проверяемый объект
- `class` - тип или подтип класс
- `noRecursive` (необязательно) - `true` для проверки только прямого членства без учёта наследования

### GetParentClass

Возвращает класс объекта или родительский класс класса:

```lua
local cls = GetParentClass( myObject )   -- класс объекта
local parent = GetParentClass( MyClass )  -- родитель класса
```

---

## 7. Практический паттерн: интерфейс + реализация

Библиотека не предоставляет абстрактных классов в классическом понимании. Паттерн интерфейса реализуется через методы, выбрасывающие ошибку:

```lua
Class( "WidgetClassInterface", {
    _widgetManager = nil,
} )

function WidgetClassInterface:GetNativeWidget()
    error( "WidgetClassInterface:GetNativeWidget must be implemented by subclass" )
end

function WidgetClassInterface:GetWidgetName()
    error( "WidgetClassInterface:GetWidgetName must be implemented by subclass" )
end

function WidgetClassInterface:GetPriorityClass()
    return 0  -- реализация по умолчанию
end
```

Конкретные реализации наследуют интерфейс и переопределяют обязательные методы:

```lua
Class( "WidgetPanel", WidgetClassInterface() )

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

---

## 8. Паттерн: инициализация через Init

Конструктор в данной библиотеке отсутствует в привычном виде. Инициализация выполняется отдельным методом `Init`, вызываемым после создания объекта:

```lua
local manager = AlchemyWidgetManager()
manager:Init( widgets, services )
```

### Защита от повторной инициализации

```lua
function DnDManager:Init( params )
    if self._initialized then
        error( "DnDManager:Init() has already been called." )
    end
    self._initialized = true
    -- ...
end
```

---

## 9. Отладочные утилиты

При запуске из исходного кода доступны дополнительные функции:

| Функция | Назначение |
|---------|-----------|
| `IsClass( val )` | Проверка: является ли аргумент классом |
| `IsClassMember( val )` | Проверка: является ли аргумент экземпляром класса |
| `GetClassName( class )` | Получение строкового имени класса |
| `GetObjectClassPath( object )` | Полная цепочка наследования в читаемом виде |
| `GetFunctionPathByAddress( addr, ctx )` | Поиск функции в цепочке наследования |
| `LogObjectClassPath( object )` | Вывод цепочки наследования в лог |

Пример использования при формировании сообщений об ошибках:

```lua
local objectClass = GetParentClass( widget )
local className = GetClassName( objectClass )
error( string.format(
    "Unsupported class '%s' does not have an interface 'WidgetClassInterface'",
    className
) )
```

---

## 10. RevertClass: отмена наложения класса

Функция `RevertClass` снимает последнее наложение класса с объекта:

```lua
local obj = ClassA()
obj = ClassB( obj )   -- навешен ClassB
obj = RevertClass( obj )  -- ClassB снят, остался ClassA
```

Инструмент предназначен для исключительных случаев. Применение допустимо только при полном понимании внутреннего механизма.

---

## 11. Особенности и ограничения

1. **Публичность.** Все поля и методы доступны извне. Инкапсуляция обеспечивается только соглашением об именовании (префикс `_` для внутренних полей).

2. **Множественное наследование ограничено.** Раскрутка цепочки возможна только по основным классам.

3. **Отсутствие конструктора.** Инициализация выполняется методом `Init`.

4. **Сравнение объектов.** Оператор `==` для виджетов сравнивает типы и использует `IsEqual`. Для обычных таблиц - сравнение по ссылке.

5. **Циклические ссылки запрещены.** Попытка создать циклическое наследование приведёт к ошибке `cyclic class references are forbidden`.

6. **Локальные классы.** Для создания класса без глобальной регистрации:

```lua
local LocalHelper = LocalClass( { x = 0 } )
```

Имя генерируется автоматически по шаблону `localClass_XXXXXX`.

---

## Рекомендации

- Поля, предназначенные только для внутреннего использования `private`, именовать с префиксом `_` (например, `_state`, `_services`, `_widgetManager`).
- Каждый класс размещать в отдельном файле. Имя файла соответствует имени класса.
- Порядок загрузки скриптов соблюдать: сначала базовые классы и интерфейсы, затем наследники.