# common.RegisterReactionHandler
Подписывает функцию-обработчик аддона на указанную системную реакцию.

## Описание
```lua
common.RegisterReactionHandler( reactionFunction: function, sysReactionName: string )
```
Функция регистрирует переданную функцию-обработчик для реакции с заданным именем. На одну реакцию допускается подписка нескольких обработчиков. При наступлении реакции вызывается зарегистрированная функция, принимающая таблицу с параметрами.

## Список параметров
- **`reactionFunction`** (`function`)
Функция-обработчик, вызываемая при наступлении реакции. Прототип функции: `function OnReactionHandler( params: table )`.
- **`sysReactionName`** (`string`)
Уникальное имя системной реакции, на которую осуществляется подписка.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Регистрация обработчика реакции
```lua
function OnReactionSample( params )
end

common.RegisterReactionHandler( OnReactionSample, "reaction_sample" )
```

### Рекомендованный шаблон функции
```lua
-- параметры:
-- params: table, поля:
--     name: string - имя реакции
--     widget: WidgetSafe - контрол, запустивший реакцию
--     sender: string - имя контрола. Разработчик может менять имя виджета при динамическом создании виджетов, чтобы выяснять в обработчике какой конкретно экземпляр виджета на основе WidgetSafe вызвал реакцию
--     kbFlags: number (int) - клавиатурные флаги KBF_...
--     x: number (int) - координата по X
--     y: number (int) - координата по X
--     count: number (int) - количество нажатий и пр.
--     active: boolean - нажатие или отпускание

-- примеры:
function OnReactionSampleReaction( params )
    if params.active then
        for key, value in params
            LogInfo( tostring( value ) )
        end
    end
end

common.RegisterReactionHandler( OnReactionSampleReaction, "reaction_test" )
```

## Смотрите также
- [EnumKeyboardFlags](EnumKeyboardFlags)