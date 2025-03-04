const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.LOS,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Bullet,
		C3.Plugins.Particles,
		C3.Plugins.List,
		C3.Plugins.Text,
		C3.Behaviors.MoveTo,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.PolyPointXAt,
		C3.Plugins.Sprite.Exps.PolyPointYAt,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.MoveTo.Acts.MoveToPosition
	];
};
self.C3_JsPropNameTable = [
	{Тач: 0},
	{Клавиатура: 0},
	{Мышь: 0},
	{Браузер: 0},
	{bd56acxx: 0},
	{hp: 0},
	{"8Направлений": 0},
	{СледитьЗа: 0},
	{Спрайт: 0},
	{ТайловыйФон: 0},
	{Твёрдый: 0},
	{Спрайт2: 0},
	{agress: 0},
	{hpVrag: 0},
	{ПолеЗрения: 0},
	{ПоискПути: 0},
	{Спрайт3: 0},
	{Пуля: 0},
	{Спрайт6: 0},
	{Частицы: 0},
	{w026_n002_1189B_p1_1189nobgpreviewcarvephotos: 0},
	{w026_n002_1189B_p1_1189nobgpreviewcarvephotos2: 0},
	{Спрайт7: 0},
	{Список: 0},
	{pinpngcomhealthba2rpng: 0},
	{ТайловыйФон2: 0},
	{Текст: 0},
	{Текст2: 0},
	{Текст3: 0},
	{velikaiaotechestvennaiavoinafon: 0},
	{images: 0},
	{Текст4: 0},
	{Текст5: 0},
	{Текст6: 0},
	{Текст7: 0},
	{ktfl21nobgpreviewcarvephotos: 0},
	{ДвижениеК: 0},
	{militaryaircraftimagesfighterjet260nw5551412nobgpreviewcarvephotos: 0},
	{militaryaircraftimagesfighterjet260nw5551412nobgpreviewcarvephotos2: 0},
	{Спрайт9: 0},
	{Аудио: 0},
	{Текст8: 0},
	{Текст9: 0},
	{Текст10: 0},
	{vrag: 0},
	{счет: 0}
];

self.InstanceType = {
	Тач: class extends self.IInstance {},
	Клавиатура: class extends self.IInstance {},
	Мышь: class extends self.IInstance {},
	Браузер: class extends self.IInstance {},
	bd56acxx: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Частицы: class extends self.IParticlesInstance {},
	w026_n002_1189B_p1_1189nobgpreviewcarvephotos: class extends self.ISpriteInstance {},
	w026_n002_1189B_p1_1189nobgpreviewcarvephotos2: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Список: class extends self.IListInstance {},
	pinpngcomhealthba2rpng: class extends self.ISpriteInstance {},
	ТайловыйФон2: class extends self.ITiledBackgroundInstance {},
	Текст: class extends self.ITextInstance {},
	Текст2: class extends self.ITextInstance {},
	Текст3: class extends self.ITextInstance {},
	velikaiaotechestvennaiavoinafon: class extends self.ISpriteInstance {},
	images: class extends self.ISpriteInstance {},
	Текст4: class extends self.ITextInstance {},
	Текст5: class extends self.ITextInstance {},
	Текст6: class extends self.ITextInstance {},
	Текст7: class extends self.ITextInstance {},
	ktfl21nobgpreviewcarvephotos: class extends self.ISpriteInstance {},
	militaryaircraftimagesfighterjet260nw5551412nobgpreviewcarvephotos: class extends self.ISpriteInstance {},
	militaryaircraftimagesfighterjet260nw5551412nobgpreviewcarvephotos2: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {},
	Аудио: class extends self.IInstance {},
	Текст8: class extends self.ITextInstance {},
	Текст9: class extends self.ITextInstance {},
	Текст10: class extends self.ITextInstance {}
}