# VisualShipId

Идентификатор корпуса корабля. Один из типов группы `ResourceId`. (В настоящее время идентификатор корпуса корабля - идентификатор его ресурса в базе).

Поля, доступные в `VisualShipId:GetInfo()`

```
description: WString - описание
name: WString - название
image: TextureId - иконка
cannonVisualType: number (enum ENUM_CANNON_VISUAL_TYPE_...) - тип отображения пушек на интерфейсе
sysCannonVisualType: string - тип отображения пушек на интерфейсе строкой
```

## Смотрите также

- [ENUM_CANNON_VISUAL_TYPE_*](/api/enums/enums.ENUM_CANNON_VISUAL_TYPE.md)