---
outline: deep
title: ClassesImplementation
description: Документация по библиотеке реализации классов ClassesImplementation.lua
---

# ClassesImplementation.lua

## Общее описание

`ClassesImplementation.lua` - это библиотека для реализации объектно-ориентированного программирования (ООП) в Lua. Она обеспечивает поддержку наследования и полиморфизма, а также частичную инкапсуляцию.

### Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
	<ScriptFileRefs>
		<Item href="/Mods/SampleCommon/CoreScripts/ClassesImplementation.lua" />
	</ScriptFileRefs>
</UIAddon>
```

### Особенности и ограничения

- Все поля объектов/классов и методы классов являются **публичными**.
- Любой метод можно (попытаться) вызвать как статический.
- Множественное наследование реализовано с ограничениями: цепочку наследования можно раскрутить только по **основным классам** (это влияет на `GetParentClass`, который идет только по основной цепочке).
- Класс может наследоваться от обычной таблицы (все пары ключ-значение станут статическими полями/методами).
- Объект класса можно не только создать, но и "превратить" в него произвольную таблицу.
- На один объект можно "навесить" несколько классов без наследования (настоятельно не рекомендуется).



## Примеры использования

### Объявление и создание классов

```lua
-- Объявление базового класса с начальными данными
Class( "C", { value = 123 } )

function C:Log()
    LogInfo( self.value )
end

-- Объявление класса-наследника
Class( "C2", C() )

function C2:Log()
    LogInfo( self.value * self.v2 )
end
```

### Работа с объектами и полями

```lua
local a = C()
local b = C()

LogInfo( a.value ) -- 123 (В объекте поле не задано, берем из класса)
LogInfo( b.value ) -- 123 (В объекте поле не задано, берем из класса)
LogInfo( C.value ) -- 123 (Статическое поле класса)

b.value = 456      -- Задаем поле value в объекте

LogInfo( a.value ) -- 123 (В объекте не задано, берем из класса)
LogInfo( b.value ) -- 456 (Берем из объекта)
LogInfo( C.value ) -- 123 (Статическое поле класса)

C.value = 789      -- Меняем значение статического поля класса

LogInfo( a.value ) -- 789 (В объекте не задано, берем из класса)
LogInfo( b.value ) -- 456 (Из объекта)
LogInfo( C.value ) -- 789 (Статическое поле класса)
```

### Превращение таблицы в объект и вызовы методов

```lua
-- Превращаем простую таблицу в объект класса C2
local d = C2{ v2 = 2 }
d:Log()            -- 1578 (Вызов метода Log из С2 для объекта d)

C.Log( d )         -- 789 (Вызов метода Log из С для объекта d)
-- C.Log()          -- ERR (Вызов метода без передачи объекта)
C:Log()            -- 789 (Вызов метода Log из С как статического)

b:Log()            -- 456 (Вызов метода Log из С для объекта b)
C.Log( b )         -- 456 (Вызов метода Log из С для объекта b)
-- C2.Log( b )      -- ERR (Вызов метода из С2 для объекта b - поля не совпали)
```

### Интерфейс, Наследование, Полиморфизм

```lua
-- Объявление интерфейса (класса-маркера)
Class("INumber")

function INumber:GetValue()
    error("Метод GetValue не реализован")
end

function INumber:Format()
    error("Метод Format не реализован")
end

-- Базовый класс, реализующий интерфейс
Class("BaseNumber", INumber())

function BaseNumber:Init(value)
    self.value = value
end

function BaseNumber:GetValue()
    return self.value
end

function BaseNumber:Format()
    return tostring(self.value)
end

-- Класс целых чисел, наследуется от BaseNumber
Class("IntegerNumber", BaseNumber())

function IntegerNumber:Init(value)
    -- Вызов метода родителя (передача self явно)
    BaseNumber.Init(self, math.floor(value))
end

function IntegerNumber:Format()
    -- Переопределение метода с использованием логики родителя
    local baseStr = BaseNumber.Format(self)
    return baseStr .. " (целое)"
end

-- Класс дробных чисел, наследуется от BaseNumber
Class("FloatNumber", BaseNumber())

function FloatNumber:Init(value)
    BaseNumber.Init(self, value)
end

function FloatNumber:Format()
    -- Полное переопределение метода
    return string.format("%.2f (дробное)", self.value)
end

---------------------------------------------------------------------

-- Создание и инициализация объектов
local intNum = IntegerNumber()
intNum:Init(42.9) 

local floatNum = FloatNumber()
floatNum:Init(3.1415)

-- Проверка реализации интерфейса (учитывает всю цепочку наследования)
if InstanceOf(intNum, INumber) then
    LogInfo("intNum реализует INumber")
end

if InstanceOf(floatNum, INumber) then
    LogInfo("floatNum реализует INumber")
end

-- Проверка прямого членства (без учета наследования)
if InstanceOf(intNum, BaseNumber, true) then
    -- Блок не выполнится, так как прямой класс intNum - это IntegerNumber
    LogInfo("Этот текст не выведется")
end

-- Демонстрация полиморфизма
LogInfo("intNum: " .. intNum:Format()) 
-- Выведет: 42 (целое)

LogInfo("floatNum: " .. floatNum:Format()) 
-- Выведет: 3.14 (дробное)

-- Получение информации о классе
local parentClass = GetParentClass(intNum)
LogInfo("Родитель intNum: " .. GetClassName(parentClass)) 
-- Выведет: BaseNumber
```



## Публичный API

### Глобальные функции

#### `Class`

Объявляет новый класс.

```lua
Class( name: string, parent: table|nil = {} )
```

- **`name`** `(string)` - имя класса.

- **`parent`** `(table)` - родительский класс или таблица для наследования.

#### `GetParentClass`

Возвращает класс объекта или родительский класс для класса.

```lua
GetParentClass( object: table ): table|nil
```

::: warning {no-title}
Возвращает только основного родителя. При разветвлении цепочки наследования (множественное наследование) сохраняется информация только о внешнем (основном) родителе.
:::

#### `InstanceOf`

Проверяет, является ли `object` экземпляром `class`.

```lua
InstanceOf( object: table, class: table, noRecursive: boolean = false ): boolean
```

- **`noRecursive`** `(boolean)` - если `true`, проверяется только прямое членство без учета наследования.

#### `RevertClass`

Отменяет последнее наложение класса на объект.

```lua
RevertClass( object: table ): table
```

::: danger {no-title}
Это сложное "колдунство", использовать только при полном понимании принципов работы библиотеки.
:::

#### `LocalClass`

Объявляет локальный анонимный класс.

```lua
LocalClass( proto: table ): table
```

- **`proto`** `(table)` - прототип класса.



## Отладочный API

::: tip {no-title}
Отладочные глобальные функции (доступны только при запуске с исходного кода).
:::

- **`IsClass( any )`** - Проверяет, что аргумент является классом.

- **`IsClassMember( any )`** - Проверяет, что аргумент является членом (экземпляром) класса.

- **`GetClassName( class )`** - Возвращает имя класса (или `nil`, если аргумент не класс).

- **`GetObjectClassPath( object )`** - Возвращает полный путь наследования объекта или класса в читаемом виде.

- **`GetClassFunctionPathByAddress( object, func )`** - Ищет функцию в цепочке наследования объекта/класса и возвращает её путь.

- **`GetPathByAddress( any )`** - Рекурсивно ищет объект в глобальном окружении (`_G`) по ссылке.

- **`GetFunctionPathByAddress( object, func )`** - Гибрид `GetClassFunctionPathByAddress` и `GetPathByAddress`. Если не найдено, возвращает строку вида `func_АДРЕС`.

- **`LogObjectClassPath( object )`** - Выводит в лог (`LogInfo`) цепочку наследования объекта/класса.
